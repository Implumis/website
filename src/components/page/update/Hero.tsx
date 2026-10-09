"use client";

import { motion } from "motion/react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { formatUTC } from "@/lib/client/utils";
import Image from "next/image";
import { easeOutCirc } from "@/lib/client/motion";

export default function Hero({ background, createdAt, title }: HeroProps) {
  const usesBgColor = background && background[0] === "#";

  return (
    <div className="relative mt-4 lg:mt-8 xl:mt-12 md:rounded-md md:overflow-hidden md:border-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
          transition={easeOutCirc()}
      >
        <AspectRatio
          ratio={16 / 9}
          className="rounded-md h-full overflow-hidden relative border-2 md:border-0"
          style={usesBgColor ? { backgroundColor: background } : undefined}
        >
          {!usesBgColor && background && (
            <Image
              alt="Thumbnail background"
              className="absolute left-0 top-0"
              fill
              src={background}
            />
          )}
        </AspectRatio>
      </motion.div>
      <div className="mt-3 md:mt-0 md:absolute md:bottom-0 md:pl-6 md:pb-6 md:pt-8 flex flex-col gap-1.5 md:gap-3 md:from-black/50 md:bg-linear-to-t md:to-0 w-full">
        <motion.h1
          className="text-4xl md:text-6xl font-semibold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={easeOutCirc(0.05)}
        >
          {title}
        </motion.h1>
        <motion.span
          className="block mt-0.5 md:text-lg font-medium text-white/80"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={easeOutCirc(0.1)}
        >
          Created on {formatUTC(new Date(createdAt))}
        </motion.span>
      </div>
    </div>
  );
}

interface HeroProps {
  title: string;
  createdAt: string;
  background?: string;
}
