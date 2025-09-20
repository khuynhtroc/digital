import { getAllPosts } from "lib/posts";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // 👈 await params
  const filePath = path.join(process.cwd(), "content/blog", `${params.slug}`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  return (
    <article className="col-span-12 bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <MDXRemote source={content} />
    </article>
  );
}


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // 👈 chỗ này
  const filePath = path.join(process.cwd(), "content/blog", `${params.slug}`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return {
    title: data.title,
    description: data.excerpt,
    openGraph: {
      images: [data.image],
    },
  };
}
