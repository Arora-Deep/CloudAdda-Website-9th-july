# CloudAdda Brand Cleanup + Search Result Sitelinks Plan

## Goal
Clean up CloudAdda so the public website is focused only on Managed Virtual Training Labs, with no Lovable badge/visible branding and no old VPS, VDI, DaaS, Cloud Desktop, or unrelated infrastructure positioning.

Also improve the way CloudAdda appears in Google search so Google has a clearer chance of showing useful sitelinks like:

```text
CloudAdda
  Virtual Training Labs
  Pricing
  Contact
  Resources
  Support
  About
```

Important: Google decides whether to show sitelinks. We cannot force them instantly, but we can make the site structure, sitemap, metadata, and structured data much clearer.

## 1. Remove Lovable Visible Branding
- Hide the published “Edit with Lovable” badge using the project publish setting.
- Keep CloudAdda’s logo/image URLs as they are if they live under `/lovable-uploads/`, because that is just the asset storage path, not visible branding to visitors.
- Remove development-only `lovable-tagger` from the production build config if it is not needed.

## 2. Replace Old Service Messaging With Virtual Training Labs
Update existing content instead of simply deleting everything.

Replace old positioning such as:
- Cheap VPS
- VPS
- VDI
- DaaS
- Desktop-as-a-Service
- Cloud Desktops
- generic cloud desktop/laptop replacement messaging

with Virtual Training Labs-focused messaging.

Likely updates:
- `src/pages/TrainerAdda.tsx`
  - Change the old Cloud Desktop / DaaS resource cards into training-lab-focused resource cards.
- `src/pages/BlogView.tsx`
  - Rewrite the old call-center/cloud-desktop blog into a training-lab case-study style article.
  - Rewrite the old DaaS/laptop article into a virtual training labs article.
- `src/pages/PlaybookView.tsx`
  - Replace “Cheap VPS” wording with training-lab infrastructure language.
- `src/pages/Guides.tsx`
  - Adjust generic “cloud infrastructure”, API/community wording into training-lab setup, operations, support, and delivery resources.
- `src/components/CaseStudyStoryCards.tsx`
  - Reposition the case study as training teams using managed virtual labs, not generic digital transformation.

Existing heading text will only be changed where the heading itself contains forbidden/outdated service terms such as “Cloud Desktops” or “DaaS”. Otherwise, I will preserve your current heading text.

## 3. Improve Google Branded Search Appearance
Add clearer SEO signals for sitelinks:
- Add `WebSite` structured data in `index.html`.
- Add `SiteNavigationElement` structured data for the most important public pages.
- Keep `Organization` and `Service` schema focused on CloudAdda + Virtual Training Labs.
- Ensure important pages have unique titles/descriptions and canonical URLs.
- Keep `/sitemap.xml` generated from the shared route list.
- Keep high-priority routes in sitemap and prerender list:

```text
/
/virtual-training-labs
/pricing
/contact
/about
/support
/trainer-adda
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

Note: I can either keep old URL slugs temporarily and rewrite their content, or later we can create better slugs and redirect old URLs. For this pass, I will keep the URLs so nothing breaks, but the page titles/content will no longer advertise DaaS or Cloud Desktop.

## 4. Add Redirect Rules Where Useful
Update `public/_redirects` safely:
- Keep the SPA fallback.
- Add host redirect guidance where supported by the deployment platform.
- If we later rename old URLs, add 301 redirects from old DaaS/desktop URLs to new training-lab URLs.

For your aaPanel/custom server, the final `www.cloudadda.com -> cloudadda.com` 301 should still be configured at the web server/DNS/CDN level.

## 5. Validate
After implementation:
- Search the codebase again for forbidden terms: VPS, VDI, DaaS, Cloud Desktop, Desktop-as-a-Service, cheap VPS.
- Check Lovable badge setting is hidden.
- Run the static build workflow to verify the site builds and prerenders.
- Confirm sitemap generation still includes the important CloudAdda pages.

## Technical Details
Files/settings likely to change:
- Publish setting: hide Lovable badge
- `vite.config.ts`
- `package.json` / lockfile if removing `lovable-tagger`
- `index.html`
- `src/pages/TrainerAdda.tsx`
- `src/pages/BlogView.tsx`
- `src/pages/PlaybookView.tsx`
- `src/pages/Guides.tsx`
- `src/components/CaseStudyStoryCards.tsx`
- `public/_redirects`
- possibly `scripts/public-routes.mjs` if route priorities need tightening

No `/corporate-training` page will be added.