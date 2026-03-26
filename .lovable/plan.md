

# Build-Time Pre-Rendering with vite-plugin-prerender

## What This Does
At build time, a headless browser visits each route, captures the fully-rendered HTML (including all Helmet meta tags), and saves it as a static `.html` file. Crawlers and social bots get complete HTML without needing JavaScript.

## Important Note
This plugin uses Puppeteer (headless Chrome) during `npm run build`. It works fine on your own server/CI where Chrome can run. In Lovable's preview environment, builds will still work normally — the prerender step only runs during production builds.

## Changes

### 1. Install dependency
- Add `vite-plugin-prerender` (npm package, based on puppeteer-based prerender-spa-plugin for Vite)

### 2. Update `vite.config.ts`
- Import and configure the prerender plugin
- List all static routes to pre-render:

```text
/
/about
/pricing
/contact
/support
/trainer-adda
/virtual-training-labs
/guides
/blog/training-lab-costs
/blog/call-center-case-study
/blog/daas-shift-2025
/playbook/zero-to-live-lab
/playbook/scaling-1000-students
/playbook/virtual-lab-checklist
/case-study/all
/privacy-policy
/terms-of-service
```

- Configure the renderer to wait until `document.title` is set (ensures Helmet has applied meta tags before capturing HTML)

### 3. Output
After `npm run build`, the `dist/` folder will contain:
```text
dist/
  index.html          (pre-rendered homepage)
  about/index.html
  pricing/index.html
  contact/index.html
  blog/training-lab-costs/index.html
  ... etc
```

Each file has full HTML with correct `<title>`, `<meta>` tags, OG tags — exactly what crawlers need.

### 4. Server compatibility
Your existing server config (serving `index.html` for all routes) continues to work. The pre-rendered files are just static HTML that any web server will serve automatically when they match the path.

---

## Technical Details
- Plugin: `vite-plugin-prerender` — runs Puppeteer at build time only
- No runtime service, no external dependency, no cost
- New blog/playbook posts will need their slugs added to the routes array in `vite.config.ts`
- 2 files modified: `package.json` (new dep), `vite.config.ts` (plugin config)

