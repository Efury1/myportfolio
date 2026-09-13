export interface Post {
    slug: string;
    title: string;
    category: string;
}

export interface FrontMatter {
    title: string | null;
    body: string;
}