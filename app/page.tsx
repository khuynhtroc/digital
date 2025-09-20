import ProductCard from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import { getAllProducts } from "@/lib/products";
import { getAllPosts } from "@/lib/posts"; // ← đây phải trùng với export

export default async function HomePage() {
  // nếu getAllProducts là async thì phải await
  const products = await getAllProducts();
  const posts = getAllPosts(); // giả sử getAllPosts là sync

  return (
    <main className="bg-white col-span-12">
      {/* Banner */}
<section className="bg-gray-50 py-16">
  <div className="container mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center gap-12">
    {/* Text */}
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
        Kho Tài Nguyên Digital Miễn Phí
      </h1>
      <p className="mt-4 text-gray-600 text-lg">
        Tải xuống file PSD, PNG, icon, template chất lượng cao
      </p>
      <a
        href="#products"
        className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Xem sản phẩm
      </a>
    </div>

    {/* Image */}
    <div className="flex-1 flex justify-center">
      <img
        src="/images/hero-image.jpg"
        alt="Digital Assets"
        className="w-[400px] h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>


      {/* Products Section */}
      <section id="products" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Sản phẩm nổi bật
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Blog mới nhất
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {posts.map((blog) => (
              <BlogCard key={blog.slug} {...blog} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
