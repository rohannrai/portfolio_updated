"use client";

import Image from "next/image";
import { skills, timeline } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";
import { MotionWrapper, StaggerItem, StaggerWrapper } from "@/components/MotionWrappers";
import { slideInLeft, slideInRight } from "@/lib/animations";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          label="About"
          title="Crafting Premium Shopify Experiences"
          description="I'm a dedicated Shopify Liquid developer focused on building high-converting, beautifully engineered ecommerce stores for ambitious brands."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <MotionWrapper variants={slideInLeft}>
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden gradient-border">
              <div className="absolute inset-[1px] rounded-2xl overflow-hidden bg-card">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face"
                  alt="Rohan Rai - Shopify Developer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
              </div>
            </div>
          </MotionWrapper>

          <div>
            <MotionWrapper variants={slideInRight}>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                With years of hands-on Shopify experience, I specialize in transforming
                brand visions into pixel-perfect, high-performance online stores. From
                custom Liquid sections to complex metafield architectures, I deliver
                solutions that scale with your business.
              </p>
            </MotionWrapper>

            <MotionWrapper delay={0.1}>
              <h3 className="text-lg font-semibold mb-6">Journey</h3>
              <div className="space-y-0 mb-10">
                {timeline.map((item, i) => (
                  <div key={item.year} className="relative pl-8 pb-8 last:pb-0">
                    {i !== timeline.length - 1 && (
                      <div className="absolute left-[7px] top-3 bottom-0 w-px bg-white/[0.08]" />
                    )}
                    <div className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent bg-bg" />
                    <span className="text-accent text-sm font-mono">{item.year}</span>
                    <h4 className="font-semibold mt-1 mb-1">{item.title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.2}>
              <h3 className="text-lg font-semibold mb-4">Skills</h3>
              <StaggerWrapper className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <StaggerItem key={skill}>
                    <span className="inline-block px-4 py-2 rounded-lg text-sm border border-white/[0.08] bg-card text-text-secondary hover:border-accent/30 hover:text-accent transition-colors">
                      {skill}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerWrapper>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
