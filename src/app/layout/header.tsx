"use client"
import Link from "next/link";
import { Menu } from "lucide-react"; // Mobile menu icon
import { useState } from "react";

export default function HeaderPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black text-white py-4 px-6 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Heading */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Agentia World
        </h2>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6 text-white cursor-pointer" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 right-6 bg-black border border-gray-700 shadow-lg p-4 rounded-lg">
            <ul className="flex flex-col space-y-4 text-lg">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-blue-400 transition">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// Navigation Links Array
const navLinks = [
  { href: "#agentiaai", text: "Agentia AI" },
  { href: "#future-ai", text: "Future of AI" },
  { href: "#keypoints", text: "Features" },
  { href: "#pricing", text: "Pricing" },
  { href: "#contact", text: "Contact" },
];
