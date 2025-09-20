import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-sm text-gray-600">{post.excerpt}</p>
      </div>
    </div>
  );
}
