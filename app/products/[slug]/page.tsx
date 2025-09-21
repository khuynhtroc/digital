import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getAllProducts } from "@/lib/products";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }) {
  const filePath = path.join(process.cwd(), "content/products", `${params.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  return (
    <article className="flex-1 container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={data.image} alt={data.title} className="w-full md:w-1/3 h-64 object-cover rounded" />
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
          <p className="text-gray-600 mb-4">{data.excerpt}</p>
          <p className="text-xl font-bold text-indigo-600 mb-6">
            {new Intl.NumberFormat("vi-VN").format(data.price)} đ
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700">
            Mua ngay
          </button>
        </div>
      </div>
      <div className="mt-8 prose max-w-none">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}

export async function generateMetadata({ params }) {
  const filePath = path.join(process.cwd(), "content/products", `${params.slug}.mdx`);
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
