import fs from 'fs';
import path from 'path';
import getBlogMetaData from './getBlogMetaData';

export function generateSitemap() {
    const posts = getBlogMetaData('blogs');
    const baseUrl = 'https://tvnishq.com';

    const sitemapEntries = posts.map(post => {
        return `
            <url>
                <loc>${baseUrl}/blog/${post.slug}</loc>
                <lastmod>${new Date(post.date || new Date()).toISOString()}</lastmod>
            </url>
        `;
    }).join('');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
        <url>
            <loc>${baseUrl}/</loc>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
        </url>
        <url>
            <loc>${baseUrl}/gallery</loc>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
        </url>
        <url>
            <loc>${baseUrl}/blog</loc>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
        </url>
        ${sitemapEntries}
    </urlset>`;

    fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
}
