"use client";

import { motion } from "motion/react";
import { easeOutCirc } from "@/lib/client/motion";

export default function H2({ children }: H2Props) {
  return (
    <motion.h2
      className="text-3xl md:text-4xl xl:text-5xl font-semibold first:mt-6 lg:mt-8 xl:mt-12 mb-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={easeOutCirc(0.07, 0.35)}
    >
      {children}
    </motion.h2>
  );
}

interface H2Props {
  children: React.Node;
}
