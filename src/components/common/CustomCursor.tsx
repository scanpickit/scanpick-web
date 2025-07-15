"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CustomCursor = ({ active }: { active: boolean }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };

    if (!isMobile) {
      window.addEventListener("mousemove", onMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Don't render custom cursor on mobile
  if (isMobile) {
    return null;
  }

  const variants = {
    default: {
      x: position.x,
      y: position.y,
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.1,
      },
    },
    active: {
      x: position.x - 120,
      y: position.y - 25,
      height: 44,
      width: 210,
      opacity: 1,
      scale: 1,
      backgroundColor: "hsl(var(--background))",
      border: "1px solid hsl(var(--border))",
      borderRadius: "9px",
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={active ? "active" : "default"}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
    >
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.1 } }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center gap-1 w-full h-full px-6 py-3"
          >
            <span className="text-foreground font-semibold text-base whitespace-nowrap">View LinkedIn Profile</span>
            <ArrowUpRight className="text-foreground flex-shrink-0" size={20} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CustomCursor;
