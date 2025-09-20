// app/categories/[...slug]/page.tsx
import { getCategories, getCategoryBySlug, Category } from "@/lib/categories";
import { getAllProducts, Product } from "@/lib/products";
import { getAllPosts, Post } from "@/lib/posts";
import Link from "next/link";

// Tạo static params cho SSG
export async function generateStaticParams() {
  const productCategories = getCategories("product");
  const postCategories = getCategories("post");
  const allCategories = [...productCategories, ...postCategories];

  return allCategories.map((cat) => ({ slug: [cat.slug] }));
}

export default async function CategoryPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  // Lấy slug cuối cùng để map với category JSON
  const slugPath = params?.slug?.[params.slug.length - 1];
  if (!slugPath) {
    return (
      <div className="container mx-auto px-4 py-8 text-red-600">
        Không tìm thấy danh mục
      </div>
    );
  }

  // Tìm category product trước
  let category: Category | undefined = getCategoryBySlug("product", slugPath);
  let type: "product" | "post" | undefined = "product";

  // Nếu không có product, thử tìm post
  if (!category) {
    category = getCategoryBySlug("post", slugPath);
    type = category ? "post" : undefined;
  }

  // Nếu vẫn không tìm thấy category
  if (!category || !type) {
    return (
      <div className="container mx-auto px-4 py-8 text-red-600">
        Không tìm thấy danh mục
      </div>
    );
  }

  if (type === "product") {
    const allProducts: Product[] = await getAllProducts();
    const products = allProducts.filter((p) => p.category === category!.slug);

    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
        <p className="mb-8 text-gray-700">{category.description}</p>

        {products.length === 0 ? (
          <p className="text-gray-500">Chưa có sản phẩm nào trong danh mục này.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="border rounded-lg p-6 shadow hover:shadow-lg transition bg-white"
              >
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p className="text-gray-600">{product.excerpt}</p>
              </Link>
            ))}
          </div>
        )}
      </main>
    );
  } else {
    const allPosts: Post[] = await getAllPosts();
    const posts = allPosts.filter((p) => p.category === category!.slug);

    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
        <p className="mb-8 text-gray-700">{category.description}</p>

        {posts.length === 0 ? (
          <p className="text-gray-500">Chưa có bài viết nào trong danh mục này.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="border rounded-lg p-6 shadow hover:shadow-lg transition bg-white"
              >
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        )}
      </main>
    );
  }
}
