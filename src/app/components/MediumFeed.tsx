"use client";
import { useEffect, useState } from "react";

interface Post {
  title: string;
  link: string;
}

const MEDIUM_USERNAME = "coderchic";
const RSS_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
const PROXY_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

export default function MediumFeed() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await fetch(PROXY_URL);
        if (!res.ok) throw new Error("rss2json request failed");

        const data = await res.json();
        if (data.status !== "ok") throw new Error("feed status not ok");

        const loaded: Post[] = data.items.slice(0, 5).map((item: any) => ({
          title: item.title,
          link: item.link,
        }));

        setPosts(loaded);
      } catch (err) {
        console.error("MediumFeed failed to load posts:", err);
        setPosts([]);
      }
    }

    loadPosts();
  }, []);

  return (
    <>
    <div className="font-mono text-blue-700 text-sm border-t-2 border-b-2 border-blue-700 py-4 mt-6">
      <p className="text-black inline-block px-2 py-0.5 mb-2 font-bold uppercase mb-3">
        RECENT STORIES
      </p>

      <p className="text-blue-700 tracking-widest mt-3 select-none">
        {"/".repeat(40)}
      </p>

      <ul className="space-y-1">
        {posts.map((post) => (
          <li key={post.link}>
            
          <a   href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-900"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>

      <p className="text-blue-700 tracking-widest mt-4 select-none">
        {"/".repeat(40)}
      </p>
    </div>
    </>
  );
}