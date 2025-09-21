// app/admin/dashboard/page.tsx
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { getCategories } from "@/lib/categories";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    return (
      <div className="p-6 text-red-600">
        Bạn cần đăng nhập để xem dashboard
      </div>
    );
  }

  const userEmail = user.primaryEmailAddress?.emailAddress;
  const productCategories = await getCategories("product");
  const postCategories = await getCategories("post");

  const totalProducts = productCategories.reduce((sum, cat) => sum + (cat.count ?? 0), 0);
  const totalPosts = postCategories.reduce((sum, cat) => sum + (cat.count ?? 0), 0);

  // Thống kê nâng cao giả lập
  const totalViews = 12450;
  const totalOrders = 325;
  const totalRevenue = 45875;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold">Dashboard Admin</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-700">
            Chào, {user.firstName || userEmail || "Admin"}
          </span>
          <SignOutButton>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Đăng xuất
            </button>
          </SignOutButton>
        </div>
      </header>

      {/* Thống kê chính: Sản phẩm & Bài viết */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sản phẩm */}
        <div className="p-4 border rounded shadow-sm bg-white">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Sản phẩm</h2>
            <Link
              href="/admin/products/new"
              className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600 text-sm"
            >
              Thêm mới
            </Link>
          </div>
          <p>Tổng số sản phẩm: {totalProducts}</p>
          <ul className="mt-2 list-disc list-inside">
            {productCategories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/categories/product/${cat.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {cat.name}: {cat.count ?? 0}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bài viết */}
        <div className="p-4 border rounded shadow-sm bg-white">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Bài viết</h2>
            <Link
              href="/admin/posts/new"
              className="px-3 py-1 text-white bg-green-500 rounded hover:bg-green-600 text-sm"
            >
              Thêm mới
            </Link>
          </div>
          <p>Tổng số bài viết: {totalPosts}</p>
          <ul className="mt-2 list-disc list-inside">
            {postCategories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/categories/post/${cat.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {cat.name}: {cat.count ?? 0}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Thống kê nâng cao */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="p-4 border rounded shadow-sm bg-white">
          <h3 className="font-semibold mb-2">Lượt xem</h3>
          <p className="text-2xl font-bold">{totalViews.toLocaleString()}</p>
        </div>
        <div className="p-4 border rounded shadow-sm bg-white">
          <h3 className="font-semibold mb-2">Đơn hàng</h3>
          <p className="text-2xl font-bold">{totalOrders}</p>
        </div>
        <div className="p-4 border rounded shadow-sm bg-white">
          <h3 className="font-semibold mb-2">Doanh thu</h3>
          <p className="text-2xl font-bold">${totalRevenue.toLocaleString()}</p>
        </div>
      </section>
    </div>
  );
}
