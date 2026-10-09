"use client";

import { motion } from "motion/react";
import { easeOutCirc } from "@/lib/client/motion";

const pathVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: easeOutCirc(0, 0.3),
  },
};

export default function Corner({ className }: CornerProps) {
  return (
    <svg
      width="127"
      height="127"
      viewBox="0 0 127 127"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_10055_51)">
        <motion.path
          d="M 3.5 0 V 127"
          stroke="white"
          strokeWidth="7"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M 0 3.5 H 127"
          stroke="white"
          strokeWidth="7"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </g>
      <defs>
        <clipPath id="clip0_10055_51">
          <rect width="127" height="127" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

interface CornerProps {
  className?: string;
}
