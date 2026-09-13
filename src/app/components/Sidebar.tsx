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
    <nav
      aria-label="Post categories"
      style={{
        width: 220,
        flexShrink: 0,
        borderRight: "1px solid #B0B0B0",
        padding: "20px 14px",
        boxSizing: "border-box",
        background: "#ECECEC",
        overflowWrap: "break-word",
        wordBreak: "break-word",
      }}
    >
      <div
        style={{
          fontSize: 13,
          letterSpacing: 0.3,
          color: "#595959",
          marginBottom: 14,
        }}
      >
        Log of Milestones
      </div>

      {loading && (
        <div
          role="status"
          aria-live="polite"
          style={{ fontSize: 14, color: "#595959" }}
        >
          Loading...
        </div>
      )}

      {!loading && (
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {grouped.map(({ category, posts: groupPosts }) => (
            <li key={category} style={{ marginBottom: 18 }}>
              <div
                id={`category-${category}`}
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                  color: "#595959",
                  marginBottom: 8,
                }}
              >
                {category}
              </div>
              <ul
                aria-labelledby={`category-${category}`}
                style={{ listStyle: "none", margin: 0, padding: 0 }}
              >
                {groupPosts.map((post) => (
                  <li key={post.slug}>
                    <PostListItem
                      post={post}
                      active={post.slug === selectedSlug}
                      onClick={() => onSelect(post.slug)}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}