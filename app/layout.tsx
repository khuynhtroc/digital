// app/layout.tsx
import "./styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? ""}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
          {/* Header */}
          <Header />

          {/* Main content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

