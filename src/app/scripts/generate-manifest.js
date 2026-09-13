// Run with: node scripts/generate-manifest.js
// Scans public/blog for .md files and writes manifest.json listing all of them.
// Re-run this any time you add, remove, or rename a post.

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(process.cwd(), 'public', 'blog');
const MANIFEST_PATH = path.join(BLOG_DIR, 'manifest.json');

function generateManifest() {
    if (!fs.existsSync(BLOG_DIR)) {
        console.error(`Folder not found: ${BLOG_DIR}`);
        console.error('Create public/blog and add your .md files there first.');
        process.exit(1);
    }

    const files = fs
        .readdirSync(BLOG_DIR)
        .filter((file) => file.endsWith('.md'))
        .sort();

    if (files.length === 0) {
        console.warn('No .md files found in public/blog — manifest will be empty.');
    }

    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(files, null, 4) + '\n');
    console.log(`Wrote ${files.length} post(s) to ${MANIFEST_PATH}:`);
    files.forEach((f) => console.log(`  - ${f}`));
}

generateManifest();