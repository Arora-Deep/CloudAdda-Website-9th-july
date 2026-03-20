

# SEO & Metadata Overhaul — Virtual Training Labs Only

## Summary
Update all meta tags, titles, Schema.org data, and page-level Helmet tags across the entire site to reflect only "Virtual Training Labs" positioning. Remove all references to DaaS, VPS, cloud desktops, and hosting from metadata (blog content referencing these as article topics will be kept as-is since they are editorial content, not site positioning).

---

## Changes by File

### 1. `index.html` — Global Fallback Metadata
- **Title**: "CloudAdda | Managed Virtual Training Labs for IT Training"
- **Description**: "CloudAdda provides fully managed virtual training labs for IT training companies, bootcamps, and corporate upskilling. Browser-based, scalable, and built for reliable live sessions."
- **Keywords**: "virtual training labs, managed virtual labs, IT training labs, instructor-led training labs, corporate training labs"
- **OG/Twitter title**: "CloudAdda | Managed Virtual Training Labs"
- **OG/Twitter description**: "Fully managed virtual training labs built for live IT training, certification programs, and corporate upskilling."
- **OG/Twitter image**: Update to `https://cloudadda.com/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png`
- **Schema.org**: Remove WebSite SearchAction block, DaaS service block, VPS service block. Keep Organization and Virtual Training Labs service only.
- Update Organization description to remove DaaS/VPS references.

### 2. `src/pages/VirtualTrainingLabs.tsx`
- Remove the `useEffect` that manually sets `document.title` and meta description (lines 9-22).
- Add `Helmet` import from `react-helmet-async`.
- Add `<Helmet>` block with:
  - Title: "Managed Virtual Training Labs for IT Training | CloudAdda"
  - Description, OG, Twitter, canonical — matching existing manual content but via Helmet.

### 3. `src/pages/PrivacyPolicy.tsx` — Add Helmet
- Title: "Privacy Policy | CloudAdda"
- Description: "Read CloudAdda's privacy policy on how we collect, use, and protect your data."
- Canonical: `https://cloudadda.com/privacy-policy`

### 4. `src/pages/TermsOfService.tsx` — Add Helmet
- Title: "Terms of Service | CloudAdda"
- Description: "Review CloudAdda's terms of service for using our managed virtual training lab platform."
- Canonical: `https://cloudadda.com/terms-of-service`

### 5. `src/pages/Guides.tsx` — Add Helmet
- Title: "Guides & Resources | CloudAdda"
- Description: "Step-by-step guides, tutorials, and resources for setting up and managing virtual training labs with CloudAdda."
- Canonical: `https://cloudadda.com/guides`

### 6. `src/pages/BlogView.tsx` — Add Helmet
- Dynamic title/description based on the selected post (e.g., `post.title + " | CloudAdda"`)
- Add `Helmet` import.

### 7. `src/pages/CaseStudyView.tsx` — Add Helmet
- Title: "Case Studies | CloudAdda"
- Description: "Real-world case studies showing how training companies use CloudAdda's virtual labs."

### 8. `src/pages/PlaybookView.tsx` — Add Helmet
- Dynamic title/description based on the selected playbook.

### 9. `src/pages/NotFound.tsx` — Add Helmet
- Title: "Page Not Found | CloudAdda"
- Description: "The page you're looking for doesn't exist."

---

## Editorial Content (No Changes)
Blog posts and playbooks that mention DaaS, VPS, or cloud desktops as article topics (e.g., "Why DaaS Is Taking Over") are editorial content and will **not** be modified — they are articles about those topics, not site positioning. The one VPS mention in PlaybookView is within article prose and stays as-is.

---

## Technical Notes
- All Helmet blocks will include: title, meta description, OG (title/description/image/url/type), Twitter (card/title/description/image), and canonical URL.
- Social image consistently: `https://cloudadda.com/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png`
- 9 files modified total. No layout or functionality changes.

