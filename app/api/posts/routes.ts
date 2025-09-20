import { getAllPosts } from "@/lib/posts";

export async function GET() {
  const posts = await getAllPosts();
  return new Response(JSON.stringify(posts));
}


"use client";
import { useEffect, useState } from "react";

export default function PostListClient() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map((post: any) => (
        <div key={post.slug}>{post.title}</div>
      ))}
    </div>
  );
}
