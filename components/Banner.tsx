// components/Banner.tsx
import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-secondary mb-4">
          Kho Tài Nguyên Digital Miễn Phí
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Tải xuống file PSD, PNG, icon, template chất lượng cao
        </p>
        <Link href="/products" className="bg-primary text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Xem sản phẩm
        </Link>

      </div>
    </section>
  );
}
