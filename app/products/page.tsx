import { getAllProducts } from "@/lib/products";
import Link from "next/link";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="flex-1 container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Sản phẩm</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((p) => (
          // 1. Dùng Link bọc thẻ div và chuyển key ra ngoài
          <Link 
            key={p.slug} 
            href={`/products/${p.slug}`}
            className="group block" // Thêm class để có thể tùy biến thêm
          >
            {/* Toàn bộ div này giờ đã là một liên kết */}
            <div className="bg-white rounded-lg shadow p-4 border h-full transition group-hover:shadow-lg group-hover:border-indigo-500">
              <img src={p.image} alt={p.title} className="w-full h-40 object-cover rounded" />
              {/*<h3 className="text-lg font-semibold mt-2">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">{p.description}</p>
              <p className="font-bold text-indigo-600 mt-2">
                {new Intl.NumberFormat("vi-VN").format(p.price)} đ
              </p>
              <span className="block mt-3 text-center bg-indigo-600 text-white py-2 rounded group-hover:bg-indigo-700">
                Xem chi tiết
              </span>*/}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}