"use client";

import { useEffect, useState } from "react";

export default function PostListClient() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  if (!posts.length) return <p>Đang tải bài viết...</p>;

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.slug} className="p-4 border rounded shadow-sm">
          <h3 className="text-lg font-bold">{post.title}</h3>
          <p className="text-gray-600">{post.category}</p>
        </div>
      ))}
    </div>
  );
}
