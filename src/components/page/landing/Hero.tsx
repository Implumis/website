"use client";

import { motion } from "motion/react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="mt-8 md:mt-20 lg:mt-30 xl:mt-36">
      <hgroup className="font-semibold text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0, 0.55, 0.45, 1] }}
        >
          We make things
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: [0, 0.55, 0.45, 1],
            delay: 0.09,
          }}
        >
          That <i className="text-primary">fly</i>.
        </motion.h1>
      </hgroup>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0, 0.55, 0.45, 1], delay: 0.14 }}
      >
        <Link
          className="flex mt-5 items-center gap-2 font-medium sm:text-xl md:text-2xl w-max group transition-all hover:brightness-85 ease-in-out duration-250"
          href="/updates"
        >
          <span>View updates</span>{" "}
          <MoveRight className="group-hover:ml-1 transition-all ease-in-out duration-250" />
        </Link>
      </motion.div>
    </div>
  );
}
