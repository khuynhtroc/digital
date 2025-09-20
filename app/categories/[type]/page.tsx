import { getCategoryBySlug } from "@/lib/categories";
import { getAllProducts } from "@/lib/products";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function CategoryPage({
  params,
}: {
  params: { type: "product" | "post"; slug: string };
}) {
  const { type, slug } = params;

  const category = getCategoryBySlug(type, slug);

  if (!category) {
    return (
      <div className="p-6 text-red-600">
        Không tìm thấy danh mục <b>{slug}</b> ({type})
      </div>
    );
  }

  let items: any[] = [];
  if (type === "product") {
    items = getAllProducts().filter((p) => p.category === slug);
  } else if (type === "post") {
    items = getAllPosts().filter((p) => p.category === slug);
  }

  return (
    <main className="container mx-auto px-6 py-8 col-span-12">
      <h1 className="text-3xl font-bold mb-4">
        {category.name} ({items.length})
      </h1>
      {category.description && (
        <p className="mb-6 text-gray-600">{category.description}</p>
      )}

      {items.length === 0 ? (
        <div className="text-gray-500">Chưa có nội dung nào trong danh mục này.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/${type === "product" ? "products" : "blog"}/${item.slug}`}
              className="border rounded-lg p-6 shadow hover:shadow-lg transition bg-white"
            >
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              {item.excerpt && <p className="text-gray-600">{item.excerpt}</p>}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
