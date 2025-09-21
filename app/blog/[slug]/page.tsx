// app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts } from "@/lib/posts";

type BlogPostParams = {
  params: { slug: string };
};

// Tạo danh sách slug cho pre-rendering
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Trang bài viết
export default async function BlogPost({ params }: BlogPostParams) {
  const { slug } = params;

  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  return (
    <article className="col-span-12 bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <MDXRemote source={content} />
    </article>
  );
}

// Metadata cho SEO
export async function generateMetadata({ params }: BlogPostParams) {
  const { slug } = params;

  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return {
    title: data.title,
    description: data.description || "",
    openGraph: {
      images: data.image ? [data.image] : [],
    },
  };
}
