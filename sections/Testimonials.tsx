"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerItem, StaggerWrapper } from "@/components/MotionWrappers";

export function Testimonials() {
  return (
    <section className="section-padding bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          label="Testimonials"
          title="What Clients Say"
          description="Trusted by founders and brands worldwide to deliver exceptional Shopify experiences."
        />

        <StaggerWrapper className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="glass-card relative p-6 md:p-8 rounded-2xl h-full flex flex-col"
              >
                <Quote className="text-accent/40 mb-4" size={28} />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-text-secondary leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent text-sm font-bold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{testimonial.author}</p>
                    <p className="text-text-secondary text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
}
