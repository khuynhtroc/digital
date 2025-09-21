import fs from "fs";
import path from "path";
import matter from "gray-matter";

const productsDir = path.join(process.cwd(), "content/products");

export function getAllProducts() {
  const files = fs.readdirSync(productsDir);
  const products = files.map((filename) => {
    const filePath = path.join(productsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);
    return data;
  });
  return products;
}

export type Product = {
  title: string;
  slug: string;
  category: string;
  description?: string;
  image?: string;
  price?: number;
  // thêm các trường khác nếu cần
};

export function getProductBySlug(slug: string) {
  const filePath = path.join(productsDir, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  return { ...data, content };
}
