"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserAvatar from "./UserAvatar";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Jobs", href: "/jobs" },
    { name: "Profile", href: "/profile" },
    { name: "Login", href: "/auth/login" },
  ];

  const username = "Gautam Suthar";

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Left: Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          JobConnect
        </Link>

        {/* Center: Welcome message */}
        <div className="flex-grow text-center">
          <span className="text-sm font-medium text-gray-700">
            Welcome, {username}
          </span>
        </div>

        {/* Right: Links + Avatar */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium ${
                pathname === link.href
                  ? "text-blue-600 underline"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <UserAvatar
            src="/user.png"
            alt="User Avatar"
            size={10}
            icon={<ChevronDown className="avatar-icon" />}  // Adding custom class to icon
          />
        </div>
      </div>
    </nav>
  );
}
