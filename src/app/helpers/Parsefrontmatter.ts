import { FrontMatter } from "./types";

export function parseFrontMatter(raw: string): FrontMatter {
    const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    if (!match) return { title: null, body: raw };

    const meta: Record<string, string> = {};
    match[1].split('\n').forEach((line) => {
        const i = line.indexOf(':');
        if (i > -1) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    });

    return { title: meta.title || null, body: match[2] };
}

const CATEGORY_ORDER = ["Hackathon", "Talks", "Project", "Mentoring"] as const;

// Filenames look like "Talks_DDD_Brisbane_2023.md" — the part before the
// first underscore is the category.
export function getCategoryFromFilename(filename: string): string {
  const prefix = filename.split('_')[0];
  return (CATEGORY_ORDER as readonly string[]).includes(prefix) ? prefix : "Other";
}

// Turns "Talks_DDD_Brisbane_2023.md" into "DDD Brisbane 2023" for use as
// a slug or fallback title.
export function getSlugFromFilename(filename: string): string {
  return filename
    .replace(/\.md$/, "")
    .split('_')
    .slice(1)
    .join('_');
}