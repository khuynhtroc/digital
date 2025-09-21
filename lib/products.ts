import fs from "fs";
import path from "path";
import matter from "gray-matter";

const productsDir = path.join(process.cwd(), "content/products");

export type Product = {
  title: string;
  slug: string;
  category: string;
  description: string;   // 👈 bắt buộc
  excerpt?: string;   // 👈 thêm field excerpt
  image?: string;
  price?: number;
  content?: string; // nếu muốn lấy cả nội dung
};

// Lấy tất cả sản phẩm
export function getAllProducts(): Product[] {
  const files = fs.readdirSync(productsDir);

  const products: Product[] = files.map((filename) => {
    const filePath = path.join(productsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    const slug = filename.replace(/\.mdx?$/, ""); // bỏ đuôi .mdx

    return {
      title: data.title ?? "",
      slug,
      category: data.category ?? "",
      description: data.description ?? "",  // 👈 đảm bảo luôn có
      excerpt: data.excerpt ?? "",   // 👈 đảm bảo luôn có excerpt
      image: data.image ?? "",
      price: data.price ?? 0,
    };
  });

  return products;
}

// Lấy sản phẩm theo slug
export function getProductBySlug(slug: string): Product {
  const filePath = path.join(productsDir, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    title: data.title ?? "",
    slug,
    category: data.category ?? "",
    description: data.description ?? "",  // 👈 đảm bảo luôn có
    excerpt: data.excerpt ?? "",   // 👈 đảm bảo luôn có excerpt
    image: data.image ?? "",
    price: data.price ?? 0,
    content,
  };
}
