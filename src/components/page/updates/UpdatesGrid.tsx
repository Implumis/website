"use client";

import Update from "./Update";
import { motion } from "motion/react";

export default function UpdatesGrid({ updates }: UpdatesGridProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {updates.map((update, index) => (
        <motion.div
          className="flex"
          key={`update-${index}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.35,
            ease: [0, 0.55, 0.45, 1],
            delay: 0.05 + (index + 1) * 0.05,
          }}
        >
          <Update
            filename={update.slug}
            background={update.background}
            title={update.title}
            createdAt={new Date(update.createdAt)}
            description={update.description}
          />
        </motion.div>
      ))}
    </div>
  );
}

interface UpdatesGridProps {
  updates: {
    slug: string;
    background?: string;
    title: string;
    createdAt: string;
    description: string;
  }[];
}
