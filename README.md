# ठिkaana — marketing site

Single-page React site (Vite). Dark theme, plain CSS, WebGL hero.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # -> dist/
npm run preview  # serve dist/ locally
```

## Deploy (Cloudflare Workers Static Assets)

Pushing to `main` auto-deploys to production — there is no staging step.

| Setting | Value |
| --- | --- |
| Build command | `npm ci && npm run build` |
| Deploy command | `npx wrangler deploy` |
| Worker name | `fernbridge-digital` (must match `name` in `wrangler.jsonc`) |

Custom domains `thikaana.co` and `www.thikaana.co` are attached in the Cloudflare dashboard.

## Layout

```
index.html            Vite entry + Google Fonts
src/
  main.jsx
  App.jsx             every section, in page order
  data.js             all copy and content
  index.css           design tokens + component styles
  particles/
    Field.jsx         lazy-loaded canvas (keeps three.js out of the main chunk)
    ParticleField.jsx GLSL point cloud — morphing, pointer repulsion
    formations.js     target shapes, incl. text→point-cloud sampling
  assets/
    previews/         homepage screenshots for the work cards
    team/             team photos
```

## Notes

- **Fonts:** Space Grotesk (display), Inter (body), IBM Plex Mono (labels), Noto Sans Devanagari (the `ठि`).
- **Hero field** falls back to a static gradient when WebGL is unavailable or `prefers-reduced-motion` is set. Particle count drops to 9,000 below 900px.
- **Work card previews** are static screenshots. If a client site is redesigned, recapture it and replace the WebP in `src/assets/previews/`.
- **Contact form** posts to Web3Forms. The access key *is* the delivery address (`support@thikaana.co`) — it cannot be changed without issuing a new key. Web3Forms rejects server-side POSTs on the free plan, so test from a browser.
