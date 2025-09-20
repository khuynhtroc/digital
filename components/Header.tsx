import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          MyBlog
        </Link>
        <nav className="space-x-6">
          <Link href="/">Trang chủ</Link>
          <Link href="/categories">Danh mục</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/products">Sản phẩm</Link>
          <Link href="/about">Giới thiệu</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
