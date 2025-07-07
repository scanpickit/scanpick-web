"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  // { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-scanpick-black text-white border-b border-neutral-800 transition-all duration-300">
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
        <div className="hidden sm:flex items-center space-x-6">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-[#A62929] transition-all duration-300"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/book"
            className="bg-[#A62929] hover:bg-red-600 text-white px-4 py-2 rounded-md transition-all duration-300"
          >
            Book a call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <AnimatePresence mode="wait" initial={false}>
          <button
            className="sm:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <Menu size={24} />
              </motion.div>
            )}
          </button>
        </AnimatePresence>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black z-40 transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 flex flex-col space-y-3 bg-black text-white text-lg">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="block hover:text-[#A62929] transition-all duration-300 pl-3"
            >
              {label}
            </Link>
          ))}
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
