# Footfall — thikaana.co visitor tracking

Handoff / reference doc. Covers the whole pipeline, what you own, how to
redeploy the site without breaking tracking, how to verify it, and how to fix it
if it stops working.

**Status as of 2 Sep 2026: fully operational.** The tracker is live on
`https://www.thikaana.co/`, page views are landing in Supabase, and the Ops tool's
**Footfall** screen is showing them (real Instagram / Google referrals already
recorded). Nothing is missing. This document exists so that whoever redeploys the
site keeps it that way.

---

## 1. What it is

Every page load on thikaana.co sends one row to a Supabase table. The ठिkaana Ops
tool reads that table and shows page views, unique visitors, sessions, a per‑day
chart, top pages, top referrers and a live "recent visits" feed.

```
  visitor's browser
        │  loads https://www.thikaana.co/
        ▼
  index.html  ──has──►  <script src=".../Project-Management-Suite/track.js" data-site="thikaana.co">
        │
        ▼
  track.js runs once, POSTs a JSON row:
        │   { site, path, referrer, visitor_id, session_id, user_agent }
        ▼
  Supabase REST API  ──inserts──►  table  public.thikops_footfall
        ▲
        │  reads (SELECT) with the same public key
        │
  ठिkaana Ops  →  "Footfall" screen (under ठिkaana Workspace)
```

No cookies. `visitor_id` is a random id kept in the visitor's `localStorage`,
`session_id` a random id in `sessionStorage` (resets when the tab closes).

---

## 2. Components and where they live

| # | Component | Repo / location | Who deploys it |
|---|---|---|---|
| A | **`track.js`** — the tracker script | repo `aidevstudioone-max/Project-Management-Suite`, file `track.js` at repo root. Served by GitHub Pages at `https://aidevstudioone-max.github.io/Project-Management-Suite/track.js` | GitHub Pages, automatic on push to `main` |
| B | **The embed tag** — `<script src=…track.js data-site="thikaana.co">` | this repo (`Fernbridge_Digital`), in the `<head>` of `index.html`, `about.html`, `team.html` | **you** — Cloudflare, `wrangler deploy` |
| C | **Supabase table** `public.thikops_footfall` | Supabase project `vdxojmbcridrxkphewkl` | one‑time SQL, already done |
| D | **Footfall screen** | repo `Project-Management-Suite`, in `thikaana-ops.html` (`renderFootfall` / `ffLoad`) | GitHub Pages, automatic |

You only own **B**. A, C and D are already in place and deploy themselves.

---

## 3. Supabase details

| | |
|---|---|
| Project ref | `vdxojmbcridrxkphewkl` |
| REST base URL | `https://vdxojmbcridrxkphewkl.supabase.co` |
| Public ("anon") key | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkeG9qbWJjcmlkcnhrcGhld2tsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgxOTkzNDMsImV4cCI6MjEwMzc3NTM0M30.4hwBumjsLE3mWqwxIYNW5vDlnJB0D0WSf01P-dErWCY` |

This key is **meant to be public** — it's already in `track.js` and in the Ops
tool, both of which are open-source pages. Row Level Security is what actually
protects the data (see §7).

### Table schema

```sql
create table public.thikops_footfall (
  id         bigint generated always as identity primary key,
  site       text not null default 'thikaana.co',
  path       text,
  referrer   text,
  visitor_id text,
  session_id text,
  user_agent text,
  ts         timestamptz not null default now()
);
create index thikops_footfall_ts_idx on public.thikops_footfall (ts desc);

alter table public.thikops_footfall enable row level security;

create policy "anon insert footfall" on public.thikops_footfall
  for insert to anon with check (true);
create policy "anon read footfall" on public.thikops_footfall
  for select to anon using (true);
```

`anon` can **insert and read only** — no update, no delete. Clearing data is a
SQL-editor job (see §6).

---

## 4. The embed tag (component B — what you maintain)

Present in the `<head>` of every page Vite builds for thikaana.co:

```html
<!-- ठिkaana Ops footfall tracker -->
<script src="https://aidevstudioone-max.github.io/Project-Management-Suite/track.js" data-site="thikaana.co"></script>
```

Files that have it: `index.html`, `about.html`, `team.html`.
The Vite multi-page config (`vite.config.js`) builds exactly those three, so those
are all the entry HTML files that exist.

- `data-site="thikaana.co"` is the label rows are stored under. The Ops Footfall
  screen only shows rows where `site = 'thikaana.co'` (constant `FOOTFALL_SITE` in
  `thikaana-ops.html`). Keep it exactly `thikaana.co`.
- thikaana.co is a single-page React app. `track.js` fires once per full document
  load. If in future you add client-side routing with several "pages" under `/`,
  those in-app navigations won't be counted — only full loads and the three built
  HTML entries. That's fine for a marketing site; note it if the site's structure
  changes.

**If you ever regenerate `index.html` / `about.html` / `team.html` from a
template, re-add the two lines above** — that's the single most likely way
tracking silently breaks.

---

## 5. Redeploying thikaana.co without breaking tracking

The site is served by **Cloudflare** (Workers static assets — see `wrangler.jsonc`,
`assets.directory: ./dist`). There is **no CI** — deploys are manual and need a
Cloudflare login.

```bash
# from the Fernbridge_Digital folder, on a machine logged into Cloudflare

git pull                 # get the latest main (includes the tracker embed)
npm ci                   # clean install
npm run build            # Vite build -> dist/  (copies index/about/team.html + assets)
npx wrangler login       # once per machine, opens a browser for OAuth
npx wrangler deploy      # pushes dist/ to Cloudflare
```

Then **purge the Cloudflare cache** for thikaana.co (Cloudflare dashboard →
the thikaana.co zone → Caching → Configuration → **Purge Everything**, or purge
just `https://thikaana.co/`). The HTML is served from Cloudflare's edge cache
(`cf-cache-status: HIT`), so a fresh `wrangler deploy` alone may keep serving the
old page for a while.

### Sanity check the build before deploying

```bash
grep -c "track.js" dist/index.html dist/about.html dist/team.html
# each should print 1
```

---

## 6. Verifying the whole pipeline

Do these in order; stop at the first one that fails and jump to §7.

1. **track.js is served**
   `https://aidevstudioone-max.github.io/Project-Management-Suite/track.js`
   → should return the script (HTTP 200), containing
   `vdxojmbcridrxkphewkl.supabase.co` and `thikops_footfall`.

2. **The tag is on the live site**
   Open `https://www.thikaana.co/`, View Source (Ctrl+U), search for `track.js`.
   The `<script src=".../track.js" data-site="thikaana.co">` line must be there.
   If it isn't → the deploy didn't include it, or Cloudflare is serving a cached
   page. Redeploy + purge (§5).

3. **track.js actually runs**
   On thikaana.co open DevTools → Application → Local Storage → `https://thikaana.co`
   → there should be a `thk_vid` key. And DevTools → Network, reload, filter
   `footfall` → you should see
   `POST https://vdxojmbcridrxkphewkl.supabase.co/rest/v1/thikops_footfall`
   returning **201**.
   - 401 → the key in `track.js` is wrong/rotated.
   - 404 → the `thikops_footfall` table doesn't exist.
   - 403 → the `anon insert` RLS policy is missing.

4. **The row is stored** — in Supabase → Table Editor → `thikops_footfall`, your
   visit shows up within a second or two.

5. **The Ops tool shows it**
   `https://aidevstudioone-max.github.io/Project-Management-Suite/Thikaana_ops` →
   log in → **Footfall** (under ठिkaana Workspace) → hit **Refresh**. Page views
   count goes up; your visit appears under "Recent visits".

---

## 7. Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Footfall screen: "The `thikops_footfall` table doesn't exist yet" | Table missing | Run the `create table …` block from §3 in Supabase → SQL Editor |
| Footfall screen: "No visits recorded yet" but you know people visited | Tag not on the live page, or Cloudflare cache | View Source on thikaana.co for `track.js`; if missing, redeploy + purge cache (§5) |
| DevTools shows `POST …/thikops_footfall` → **401** | Anon key in `track.js` is stale (was rotated in Supabase) | Update the key in `track.js` in the `Project-Management-Suite` repo **and** in `thikaana-ops.html`, push both |
| `POST` → **403** | `anon insert footfall` RLS policy was dropped | Re-create the two policies from §3 |
| `POST` → **404** | Table dropped | Re-create the table (§3) |
| No `POST` at all in Network tab; no `thk_vid` in localStorage | `track.js` didn't load (404) or a Content-Security-Policy on thikaana.co blocks it | Check `track.js` returns 200. thikaana.co currently has **no CSP** — if one is added later it must allow `script-src https://aidevstudioone-max.github.io` and `connect-src https://vdxojmbcridrxkphewkl.supabase.co` |
| Views recorded but Footfall screen still empty | Ops tool filters on `site = 'thikaana.co'`; rows were written with a different `data-site` | Make the embed tag's `data-site` exactly `thikaana.co`, redeploy |
| Numbers look inflated | Bots / your own testing / repeated `wrangler` preview loads | Clear and let it re-accumulate (§6), or filter mentally — "Unique visitors" is the more trustworthy figure |

---

## 8. Maintenance tasks

**Clear all footfall data** (anon can't delete, so do it in Supabase → SQL Editor):

```sql
delete from public.thikops_footfall;
```

**Add tracking to another thikaana.co page** — add the two `<script>` lines from
§4 to that page's `<head>`, add the page to `vite.config.js` `input` if it's a new
HTML entry, rebuild, redeploy (§5).

**Track a second website** — put the same `<script>` on that site with
`data-site="othersite.com"`. Rows are stored under that `site` value. The Ops
Footfall screen currently only displays `thikaana.co`; showing another site needs
a one-line change to `FOOTFALL_SITE` in `thikaana-ops.html` (or making it a
dropdown — ask whoever maintains the Ops tool).

**Rotate the public key** (only if it's being abused): regenerate the anon key in
Supabase → Project Settings → API, then update it in **three** places and redeploy
each: `track.js` (Project-Management-Suite repo), `thikaana-ops.html` (same repo),
and `track.js`'s `SB_KEY` constant. All three are the same key.

---

## 9. Security note

`anon` can INSERT freely, so anyone who reads `track.js` (it's public) could POST
fake rows. For a marketing-site view counter this is an accepted trade-off. If it
ever gets spammed, options in rough order of effort:

1. Purge the junk (`delete from …`) and carry on.
2. Add a Cloudflare rate-limit rule on `POST /rest/v1/thikops_footfall`
   (can't — different origin; would need a Cloudflare Worker proxy instead).
3. Put a Supabase Edge Function in front as a gatekeeper (validates `Origin`,
   rate-limits per IP) and change `track.js` to call that instead of the REST API.
4. Move to a real analytics product (Plausible / Umami / Cloudflare Web Analytics)
   and retire this.

None of that is needed today.
