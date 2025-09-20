import Link from "next/link";

interface BlogCardProps {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
}

export default function BlogCard({ title, slug, date, excerpt }: BlogCardProps) {
  return (
    <div className="card p-4 bg-white rounded-lg shadow hover:shadow-lg overflow-hidden">
      <a href={`/blog/${slug}`}><h3 className="text-xl font-semibold mb-2">{title}</h3></a>
      <p className="text-gray-500 text-sm mb-2">{date}</p>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link href={`/blog/${slug}`} className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Xem chi tiết</Link>
    </div>
  );
}
