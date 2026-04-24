# Revised SEO, Prerendering, Sitemap, and Performance Plan

## Confirmed Changes from Your Feedback
- Remove `/corporate-training` completely from the plan.
- Do not change any visible heading text.
- Do not rewrite H1, H2, or H3 copy in this phase.
- Heading structure fixes will be limited to technical tag adjustments only if needed, while keeping the exact same text.

## 1. Keep Existing Puppeteer Prerender Setup
Use the current `scripts/prerender.mjs` approach. No external services like prerender.io.

Important routes to keep prerendered:
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

No `/corporate-training` route will be added.

## 2. Centralize Public Routes
Create a shared route list so important public URLs are managed in one place.

Use this shared list for:
- prerendering
- sitemap generation
- future route maintenance

This prevents forgetting to add a route in one place later.

## 3. Sitemap and Robots
Update sitemap handling so `/sitemap.xml` includes all public URLs from the shared route list.

Keep robots simple and correct:
```text
User-agent: *
Allow: /

Sitemap: https://cloudadda.com/sitemap.xml
```

## 4. Canonical Tags
Ensure every public page has a canonical URL using the preferred domain:
```text
https://cloudadda.com
```

This helps Google treat non-www as the main version.

The actual `www.cloudadda.com` to `cloudadda.com` 301 redirect must be configured on your server or DNS/CDN layer, not inside React.

## 5. Build Workflow
Add a convenient static build command that runs:
```text
vite build
sitemap generation
Puppeteer prerender
```

Example result:
```text
dist/index.html
dist/virtual-training-labs/index.html
dist/pricing/index.html
dist/blog/training-lab-costs/index.html
dist/sitemap.xml
```

## 6. Performance Improvements
Make safe performance changes that do not alter your page copy:
- Re-enable normal Vite code splitting instead of forcing one large bundle.
- Lazy-load non-critical images where applicable.
- Add async image decoding where applicable.
- Keep JS/CSS minification enabled.
- Avoid changing visible layout or heading wording.

Image conversion to WebP can be handled separately if you want, because it may require reviewing every visual asset and replacing references carefully.

## 7. Heading Structure Scope
For this phase:
- No heading text changes.
- No marketing copy rewrites.
- If a technical heading issue is found, only the HTML tag level may be adjusted while preserving the exact same text.

Example allowed:
```text
<h2>Same exact heading text</h2>
```
changed to:
```text
<h3>Same exact heading text</h3>
```

Example not allowed in this phase:
```text
Changing the wording of the heading.
```

## Technical Details
Files likely to be updated:
- `scripts/prerender.mjs`
- new shared route file, such as `scripts/public-routes.mjs`
- new sitemap generation script, such as `scripts/generate-sitemap.mjs`
- `package.json`
- `public/robots.txt`
- relevant page SEO/canonical metadata only if missing
- `vite.config.ts` for safe bundle splitting

No `/corporate-training` page or route will be created.