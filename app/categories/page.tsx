import { getCategories, Category } from "@/lib/categories";
import Link from "next/link";

export default function CategoriesPage() {
  const productCategories: Category[] = getCategories("product") || [];
  const postCategories: Category[] = getCategories("post") || [];

  return (
    <main className="container mx-auto px-6 py-8 col-span-12">
      {/* --- Danh mục sản phẩm --- */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">Danh mục sản phẩm</h1>

        {productCategories.length === 0 ? (
          <div className="p-6 text-red-600">Chưa có danh mục sản phẩm nào</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productCategories.map((cat) => (
              <Link
                key={cat.slug || cat.name}
                href={`/categories/product/${cat.slug ?? ""}`}
                className="border rounded-lg p-6 shadow hover:shadow-lg transition bg-white flex flex-col"
              >
                <h2 className="text-xl font-semibold flex items-center justify-between">
                  <span>{cat.name}</span>
                  <span className="text-sm text-gray-500">({cat.count ?? 0})</span>
                </h2>
                <p className="text-gray-600 mt-2">{cat.description}</p>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* --- Danh mục bài viết --- */}
      <section>
        <h1 className="text-3xl font-bold mb-6">Danh mục bài viết</h1>

        {postCategories.length === 0 ? (
          <div className="p-6 text-red-600">Chưa có danh mục bài viết nào</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {postCategories.map((cat) => (
              <Link
                key={cat.slug || cat.name}
                href={`/categories/post/${cat.slug ?? ""}`}
                className="border rounded-lg p-6 shadow hover:shadow-lg transition bg-white flex flex-col"
              >
                <h2 className="text-xl font-semibold flex items-center justify-between">
                  <span>{cat.name}</span>
                  <span className="text-sm text-gray-500">({cat.count ?? 0})</span>
                </h2>
                <p className="text-gray-600 mt-2">{cat.description}</p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
