"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { heroStats } from "@/lib/constants";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Button } from "@/components/Button";
import { staggerContainer, staggerItem } from "@/lib/animations";

const wordVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: 2.4 + i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  const name = "ROHAN RAI".split(" ");

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full pt-32 pb-20">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] mb-8"
          >
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            <span className="text-text-secondary text-sm">Available for new projects</span>
          </motion.div>

          <div className="overflow-hidden mb-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]">
              {name.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className="inline-block mr-[0.25em] last:mr-0"
                  style={{ perspective: "1000px" }}
                >
                  {word === "RAI" ? (
                    <span className="text-gradient-gold">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.7 }}
            className="text-xl md:text-2xl text-accent font-medium mb-6"
          >
            Shopify Liquid Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.85 }}
            className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
          >
            I build premium Shopify experiences with custom Liquid development,
            high-performance themes and scalable ecommerce solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3 }}
            className="flex flex-wrap gap-4 mb-20"
          >
            <Button href="#projects" size="lg">
              View Projects
              <ArrowRight size={18} />
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Hire Me
            </Button>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            transition={{ delayChildren: 3.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {heroStats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem}>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-text-secondary text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#trust"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary hover:text-accent transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
