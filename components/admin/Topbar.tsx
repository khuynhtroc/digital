"use client";
import { Bell, UserCircle } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-14 bg-white border-b flex items-center justify-between px-4">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 text-gray-600" />
        <UserCircle className="w-7 h-7 text-gray-700" />
      </div>
    </header>
  );
}
