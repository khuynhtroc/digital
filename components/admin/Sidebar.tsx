"use client";
import Link from "next/link";
import { BarChart3, Users, Download, Mail, Package } from "lucide-react";

const menu = [
  { name: "Dashboard", href: "/admin/dashboard", icon: BarChart3 },
  { name: "Users", href: "#", icon: Users },
  { name: "Subscribers", href: "#", icon: Mail },
  { name: "Downloads", href: "#", icon: Download },
  { name: "Products", href: "#", icon: Package },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="flex-1 p-4">
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 p-2 rounded hover:bg-gray-800"
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
