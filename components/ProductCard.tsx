import Link from "next/link";
import Image from "next/image";

interface ProductProps {
  slug: string;
  title: string;
  description?: string;
  price?: number;
  image?: string;
}

export default function ProductCard({ slug, title, description, price, image }: ProductProps) {
  return (
    <Link href={`/products/${slug}`}>
      <div className="border rounded-lg shadow hover:shadow-lg transition bg-white cursor-pointer">
        {image && (
          <Image
            src={image}
            alt={title}
            width={400}
            height={250}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        )}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          {price && <p className="text-blue-600 font-bold">{price.toLocaleString()}₫</p>}
        </div>
      </div>
    </Link>
  );
}
