# ठिkaana — marketing site

Single-page React site (Vite + Tailwind v4).

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

## Deploy (Cloudflare Pages)

| Setting | Value |
| --- | --- |
| Build command | `npm ci && npm run build` |
| Build output directory | `dist` |

Custom domain is attached in the Pages project settings.

## Layout

```
index.html        # Vite entry
src/
  main.jsx
  App.jsx         # section order
  index.css       # Tailwind + theme tokens
  components/     # one file per page section
  assets/team/    # team photos
  lottie/
```
