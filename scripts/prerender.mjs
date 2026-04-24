/**
 * Post-build pre-rendering script.
 * 
 * Usage (on your server/CI after `npm run build`):
 *   npm install puppeteer --save-dev   (one-time)
 *   node scripts/prerender.mjs
 * 
 * This spins up a local static server from dist/, visits each route with
 * headless Chrome, waits for React/Helmet to render, and saves the fully
 * rendered HTML back to dist/ as static files.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import { publicRoutes } from './public-routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PORT = 45678;
const ROUTES = publicRoutes.map(route => route.path);

// Simple static file server with SPA fallback
function startServer() {
  const mime = {
    '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
    '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff',
  };

  const fallback = readFileSync(join(DIST, 'index.html'));

  const server = createServer((req, res) => {
    let filePath = join(DIST, req.url === '/' ? 'index.html' : req.url);
    if (existsSync(filePath) && !filePath.endsWith('/')) {
      const ext = '.' + filePath.split('.').pop();
      res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
      res.end(readFileSync(filePath));
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fallback);
    }
  });

  return new Promise(resolve => server.listen(PORT, () => resolve(server)));
}

async function prerender() {
  // Dynamic import so puppeteer is only needed at script runtime
  const puppeteer = (await import('puppeteer')).default;

  console.log('Starting static server...');
  const server = await startServer();

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${route}`;
    console.log(`Pre-rendering: ${route}`);

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    // Wait a bit extra for Helmet to set meta tags
    await page.waitForFunction(() => document.title !== '', { timeout: 10000 }).catch(() => {});

    const html = await page.content();
    await page.close();

    // Write to dist/<route>/index.html
    const outDir = route === '/' ? DIST : join(DIST, route);
    mkdirSync(outDir, { recursive: true });
    const outFile = join(outDir, 'index.html');
    writeFileSync(outFile, html, 'utf-8');
    console.log(`  → ${outFile}`);
  }

  await browser.close();
  server.close();
  console.log('\n✅ Pre-rendering complete!');
}

prerender().catch(err => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
