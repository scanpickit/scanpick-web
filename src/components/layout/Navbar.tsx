"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b border-neutral-800 transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="ScanPick Logo"
            width={40}
            height={40}
            className="h-10 w-auto object-contain text-gray-100"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="hover:text-[#A62929] transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-[#A62929] transition-all duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#A62929] transition-all duration-300"
          >
            Contact
          </Link>
          <Link
            href="/book"
            className="bg-[#A62929] hover:bg-red-600 text-white px-4 py-2 rounded-md transition-all duration-300"
          >
            Book a call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown Animated */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 flex flex-col space-y-3 bg-black text-white text-lg">
          <Link
            href="/"
            className="block hover:text-[#A62929] transition-all duration-300  pl-3 "
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block hover:text-[#A62929] transition-all duration-300  pl-3 "
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block hover:text-[#A62929] transition-all duration-300  pl-3 "
          >
            Contact
          </Link>
          <Link
            href="/book"
            className="mt-2 bg-[#A62929] hover:bg-red-600 text-white px-6 py-3 rounded-lg text-center text-xl font-semibold transition-all duration-300"
          >
            Book a call
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
