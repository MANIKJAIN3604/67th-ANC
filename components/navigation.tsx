"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "HOME" },
  { href: "/events", label: "EVENTS & ACTIVITIES" },
  { href: "/venue", label: "VENUE" },
  { href: "/collaborations", label: "COLLABORATIONS" },
  { href: "/about", label: "ABOUT US" },
  { href: "/contact", label: "CONTACT US" },
  // { href: "/signup", label: "Sign-up" },
  // { href: "/login", label: "Login" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 border-b border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/Group 1.png" // Replace with your actual logo
            alt="NASA India Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
