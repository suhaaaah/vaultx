"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <motion.div
      key={pathname}
      className="relative w-full"
      initial={shouldReduceMotion ? false : { opacity: 0.96, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
