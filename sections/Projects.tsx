"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { MotionWrapper } from "@/components/MotionWrappers";

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          label="Featured Work"
          title="Selected Projects"
          description="A showcase of premium Shopify stores built with custom Liquid, optimized performance, and conversion-focused design."
        />

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <MotionWrapper key={project.id} delay={index * 0.1}>
              <div
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative group">
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-card shadow-2xl shadow-black/40"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <Image
                          src={project.desktopImage}
                          alt={`${project.name} desktop view`}
                          width={1200}
                          height={750}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute -bottom-6 -right-4 md:-right-8 w-[120px] md:w-[160px] rounded-2xl overflow-hidden border border-white/[0.12] bg-card shadow-xl shadow-black/50"
                    >
                      <div className="aspect-[9/16] overflow-hidden">
                        <Image
                          src={project.mobileImage}
                          alt={`${project.name} mobile view`}
                          width={400}
                          height={700}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-accent text-sm font-mono tracking-wider">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mt-2 mb-4">
                    {project.name}
                  </h3>
                  <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium border border-white/[0.08] bg-white/[0.03] text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button href={project.url} variant="outline">
                    View Project
                    <ArrowUpRight size={16} />
                  </Button>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
