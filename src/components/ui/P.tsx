"use client";

import { motion } from "motion/react";
import { easeOutCirc } from "@/lib/client/motion";

export default function P({ children }: PProps) {
  return (
    <motion.p
      className="mt-3"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={easeOutCirc(0.07, 0.35)}
    >
      {children}
    </motion.p>
  );
}

interface PProps {
  children: React.Node;
}
