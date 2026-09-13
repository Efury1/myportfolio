

export async function fetchManifest(): Promise<string[]> {
    const res = await fetch('/blog/manifest.json');
    if (!res.ok) throw new Error('no manifest');
    return res.json();
}

export async function fetchPost(slug: string): Promise<string> {
    const res = await fetch(`/blog/${slug}`);
    if (!res.ok) throw new Error('post not found');
    return res.text();
}