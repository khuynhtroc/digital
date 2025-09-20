import { getAllProducts } from "@/lib/products";
import Link from "next/link";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="col-span-12">
      <h1 className="text-2xl font-bold mb-6">Sản phẩm</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.slug} className="bg-white rounded-lg shadow p-4">
            <img src={p.image} alt={p.title} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.excerpt}</p>
            <p className="font-bold text-indigo-600 mt-2">
              {new Intl.NumberFormat("vi-VN").format(p.price)} đ
            </p>
            <Link href={`/products/${p.slug}`} className="block mt-3 text-center bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
