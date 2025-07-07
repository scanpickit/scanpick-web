"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Explicitly type the variants
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
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
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen bg-scanpick-black text-white flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Background Layer */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-gradient-radial from-scanpick-red/10 via-transparent to-black"
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
          This page seems to be missing! Let's get you back on track.
        </motion.p>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/"
            className="inline-flex items-center bg-scanpick-red/50 text-white px-6 py-3 rounded-md hover:bg-[#8f1e1e] transition-all font-medium"
          >
            Go Back Home <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}