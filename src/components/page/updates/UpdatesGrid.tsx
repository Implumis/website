"use client";

import Update from "./Update";
import { motion } from "motion/react";
import { easeOutCirc } from "@/lib/client/motion";

export default function UpdatesGrid({ updates }: UpdatesGridProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 lg:mt-7 xl:mt-8">
      {updates.map((update, index) => (
        <motion.div
          className="flex"
          key={`update-${index}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={easeOutCirc(0.05 + (index + 1) * 0.05, 0.35)}
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
