// app/admin/page.tsx
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server"; // ⚡ server import

export default async function AdminPage() {
  const user = await currentUser();

  if (!user) {
    // Chưa đăng nhập → chuyển tới sign-in
    redirect("/sign-in");
  }

  // Đăng nhập rồi → chuyển tới dashboard
  redirect("/admin/dashboard");

  return null;
}
