import React from "react";
import { Post } from "../helpers/types";
import { PostListItem } from "./PostListItem";

interface SidebarProps {
  posts: Post[];
  selectedSlug: string | null;
  onSelect: (slug: string) => void;
  loading: boolean;
}

// Fixed display order for category groups.
// Anything with a category not in this list falls into "Other" at the end.
const CATEGORY_ORDER = ["Hackathon", "Talks", "Project", "Mentoring"] as const;

function groupPostsByCategory(posts: Post[]) {
  const groups = new Map<string, Post[]>();

  for (const post of posts) {
    const category = post.category?.trim() || "Other";
    if (!groups.has(category)) {
      groups.set(category, []);
    }
    groups.get(category)!.push(post);
  }

  const orderedKeys = [
    ...CATEGORY_ORDER.filter((c) => groups.has(c)),
    ...[...groups.keys()].filter((c) => !CATEGORY_ORDER.includes(c as any)),
  ];

  return orderedKeys.map((category) => ({
    category,
    posts: groups.get(category)!,
  }));
}

export function Sidebar({
  posts,
  selectedSlug,
  onSelect,
  loading,
}: SidebarProps) {
  const grouped = groupPostsByCategory(posts);

  return (
    <div
      style={{
        width: 220,
        flexShrink: 0,
        borderRight: "1px solid #E4E2DC",
        padding: "20px 14px",
        boxSizing: "border-box",
        background: "#F1EFE9",
        overflowWrap: "break-word",
        wordBreak: "break-word",
      }}
    >
      <div
        style={{
          fontSize: 13,
          letterSpacing: 0.3,
          color: "#8A8780",
          marginBottom: 14,
        }}
      >
          Log of Milestones
      </div>

      {loading && (
        <div style={{ fontSize: 14, color: "#8A8780" }}>Loading...</div>
      )}

      {!loading &&
        grouped.map(({ category, posts: groupPosts }) => (
          <div key={category} style={{ marginBottom: 18 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 0.5,
                textTransform: "uppercase",
                color: "#B0AEA6",
                marginBottom: 8,
              }}
            >
              {category}
            </div>
            {groupPosts.map((post) => (
              <PostListItem
                key={post.slug}
                post={post}
                active={post.slug === selectedSlug}
                onClick={() => onSelect(post.slug)}
              />
            ))}
          </div>
        ))}
    </div>
  );
}