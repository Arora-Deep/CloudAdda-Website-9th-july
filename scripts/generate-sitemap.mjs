import { mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { SITE_ORIGIN, publicRoutes } from './public-routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

const escapeXml = value => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

const urlFor = path => `${SITE_ORIGIN}${path === '/' ? '/' : path}`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicRoutes.map(route => `  <url>
    <loc>${escapeXml(urlFor(route.path))}</loc>
    <priority>${route.priority}</priority>
    <changefreq>${route.changefreq}</changefreq>
  </url>`).join('\n')}
</urlset>
`;

mkdirSync(DIST, { recursive: true });
writeFileSync(join(DIST, 'sitemap.xml'), sitemap, 'utf-8');
console.log(`Generated sitemap.xml with ${publicRoutes.length} URLs.`);