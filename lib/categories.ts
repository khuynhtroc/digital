import fs from "fs";
import path from "path";
import { getAllProducts } from "./products";
import { getAllPosts } from "./posts";

export type Category = {
  name: string;
  slug: string;
  description?: string;
  type: "product" | "post";
  count?: number; // số lượng item trong category
};

// Lấy tất cả danh mục theo type
export function getCategories(type: "product" | "post"): Category[] {
  const filePath = path.join(
    process.cwd(),
    "content/categories",
    type === "product" ? "products.json" : "posts.json"
  );

  if (!fs.existsSync(filePath)) {
    console.warn(`File categories ${filePath} không tồn tại`);
    return [];
  }

  const data = fs.readFileSync(filePath, "utf-8");
  try {
    let categories = JSON.parse(data) as Category[];

    if (type === "product") {
      const products = getAllProducts();
      categories = categories.map((cat) => {
        const count = products.filter((p) => p.category === cat.slug).length;
        return { ...cat, count };
      });
    }

    if (type === "post") {
      const posts = getAllPosts();
      categories = categories.map((cat) => {
        const count = posts.filter((p) => p.category.toLowerCase() === cat.slug.toLowerCase()).length;
        return { ...cat, count };
      });
    }

    return categories;
  } catch (err) {
    console.error(`Lỗi parse JSON trong file ${filePath}:`, err);
    return [];
  }
}

// Lấy category theo slug
export function getCategoryBySlug(
  type: "product" | "post",
  slug: string
): Category | undefined {
  const categories = getCategories(type);
  return categories.find((cat) => cat.slug === slug);
}
