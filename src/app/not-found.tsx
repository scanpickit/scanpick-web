"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-black text-white flex items-center justify-center px-4 overflow-hidden">
      {/* Background Blur Fade */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(40px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-black z-0"
      />

      {/* Foreground Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center space-y-4"
      >
        <motion.span
          variants={itemVariants}
          className="border border-zinc-700 text-sm px-3 py-1 rounded-full text-gray-400"
        >
          Page not found
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold"
        >
          ARE YOU LOST?
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg"
        >
          YES, humans usually get lost.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-gray-500 text-md"
        >
          This page seems to be missing! Let’s get you back on track.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link
            href="/"
            className="inline-flex items-center bg-[#A62929] text-white px-6 py-3 rounded-md hover:bg-[#8f1e1e] transition-all font-medium"
          >
            Go Back Home <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
