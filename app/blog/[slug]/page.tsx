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
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        {data.description && <p className="text-gray-700 mb-6">{data.description}</p>}
        {data.image && <img src={data.image} alt={data.title} className="rounded mb-6 shadow" />}
        {data.content && (
          <article className="prose prose-slate">
            <MDXRemote source={content} />
          </article>
        )}
      </main>
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
