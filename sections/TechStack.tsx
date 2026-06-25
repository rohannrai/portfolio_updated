"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Droplets,
  FileCode,
  GitBranch,
  Github,
  ShoppingBag,
  Triangle,
  Wind,
} from "lucide-react";
import { techStack } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerItem, StaggerWrapper } from "@/components/MotionWrappers";

const iconMap = {
  ShoppingBag,
  Droplets,
  FileCode,
  Atom,
  Triangle,
  Wind,
  GitBranch,
  Github,
};

export function TechStackSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          label="Tech Stack"
          title="Tools I Work With"
          description="Modern technologies powering premium Shopify storefronts."
        />

        <StaggerWrapper className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {techStack.map((tech, index) => {
            const Icon = iconMap[tech.icon as keyof typeof iconMap];
            return (
              <StaggerItem key={tech.name}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center gap-4 p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-card hover:border-accent/20 transition-colors"
                >
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent"
                  >
                    <Icon size={28} />
                  </motion.div>
                  <span className="font-medium text-sm md:text-base">{tech.name}</span>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerWrapper>
      </div>
    </section>
  );
}
