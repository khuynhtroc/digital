// components/Header.tsx
"use client";

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";



export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 gap-4 h-16 border-b bg-white shadow-sm">
      <Link href="/" className="text-xl font-bold">My Digital Store</Link>

      <div className="flex items-center gap-2">
              <nav className="space-x-6">
        <Link href="/">Trang chủ</Link>
        <Link href="/categories">Danh mục</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/products">Sản phẩm</Link>
        <Link href="/about">Giới thiệu</Link>
        <Link href="/admin">Admin</Link>
      </nav>
        <SignedOut>
          <SignInButton>
            <button className="bg-gray-200 text-gray-900 rounded-full px-4 py-2 text-sm hover:bg-gray-300">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-[#6c47ff] text-white rounded-full px-4 py-2 text-sm hover:bg-[#5a38e6]">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
