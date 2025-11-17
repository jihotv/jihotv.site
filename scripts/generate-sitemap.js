const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

const SITE_URL = 'https://jihotv.site';

function generateSitemap() {
  // Get all post folders
  const postPaths = globSync('content/posts/*', { cwd: process.cwd() });

  const postUrls = postPaths.map(folder => {
    const slug = path.basename(folder);
    // Assuming all posts have an index.md and thus are valid pages
    // In a real app, you might read the front matter to get the last modified date
    const lastmod = new Date().toISOString();
    return `
  <url>
    <loc>${SITE_URL}/posts/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>0.8</priority>
  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>1.0</priority>
  </url>
  ${postUrls.join('')}
</urlset>`;

  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);

  console.log(`Sitemap generated at ${sitemapPath}`);
}

generateSitemap();
