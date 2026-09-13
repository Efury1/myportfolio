import React, { useEffect, useState } from 'react';
import { Sidebar } from '@/app/components/Sidebar';
import { Article } from '@/app/components/Article';
import { fetchManifest, fetchPost } from '../app/services/api';
import { parseFrontMatter } from '../app/helpers/Parsefrontmatter';
import { Post } from '../app/helpers/types';

const CATEGORY_ORDER = ["Hackathon", "Talks", "Project", "Mentoring"] as const;

// Filenames look like "Talks_DDD_Brisbane_2023.md" — the part before the
// first underscore is the category.
function getCategoryFromSlug(slug: string): string {
    const prefix = slug.split('_')[0];
    return (CATEGORY_ORDER as readonly string[]).includes(prefix) ? prefix : "Other";
}

const BlogPage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
    const [body, setBody] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Load the list of posts once.
    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                const filenames = await fetchManifest();
                const loaded: Post[] = await Promise.all(
                    filenames.map(async (slug) => {
                        const raw = await fetchPost(slug);
                        const { title } = parseFrontMatter(raw);
                        return {
                            slug,
                            title: title || slug.replace(/\.md$/, ''),
                            category: getCategoryFromSlug(slug),
                        };
                    })
                );
                if (!cancelled) {
                    setPosts(loaded);
                    setSelectedSlug(loaded[0]?.slug ?? null);
                }
            } catch (err) {
                console.error('Failed to load manifest or posts:', err);
                if (!cancelled) {
                    setError('Could not load posts. Check that /blog/manifest.json is reachable.');
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        })();
        return () => {
            cancelled = true;
        };
    }, []);

    // Load the selected post's body whenever the selection changes.
    useEffect(() => {
        if (!selectedSlug) return;
        let cancelled = false;
        (async () => {
            try {
                const raw = await fetchPost(selectedSlug);
                const { title, body } = parseFrontMatter(raw);
                if (!cancelled) {
                    setPostTitle(title || selectedSlug.replace(/\.md$/, ''));
                    setBody(body);
                }
            } catch (err) {
                console.error('Failed to load post:', err);
                if (!cancelled) setBody('Could not load this post.');
            }
        })();
        return () => {
            cancelled = true;
        };
    }, [selectedSlug]);

    if (error) {
        return (
            <div style={{ padding: 20, fontFamily: 'Georgia, serif' }}>
                {error}
            </div>
        );
    }

    return (
        <div style={{ display: 'flex', minHeight: 500, fontFamily: 'Georgia, serif', background: '#FAFAF8' }}>
            <Sidebar posts={posts} selectedSlug={selectedSlug} onSelect={setSelectedSlug} loading={loading} />
            <Article title={postTitle} body={body} />
        </div>
    );
};

export default BlogPage;