// app/layout.tsx
"use client"; // client component để chạy Clerk

import "./styles/globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Header
function Header() {
  return (
    <header className="flex justify-between items-center p-4 gap-4 h-16 border-b bg-white shadow-sm">
      <div className="text-xl font-bold">My Digital Store</div>
      <div className="flex items-center gap-2">
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

// Footer
function Footer() {
  return (
    <footer className="p-4 mt-12 border-t text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} My Digital Store. All rights reserved.
    </footer>
  );
}

// Root layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
