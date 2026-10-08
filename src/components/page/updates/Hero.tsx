"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="mt-4 lg:mt-8 xl:mt-12">
      <motion.h1
        className="text-4xl md:text-5xl xl:text-6xl font-semibold"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0, 0.55, 0.45, 1] }}
      >
        Updates
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl xl:text-2xl mt-2.5 md:mt-4 xl:mt-5"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0, 0.55, 0.45, 1], delay: 0.05 }}
      >
        Read about our latest and past progress.
      </motion.p>
    </div>
  );
}
