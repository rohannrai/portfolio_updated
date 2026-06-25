"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[10000] bg-white/[0.04]">
      <motion.div
        className="h-full bg-accent origin-left"
        style={{ scaleX: progress / 100 }}
        initial={{ scaleX: 0 }}
      />
    </div>
  );
}
