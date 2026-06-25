"use client";

import {
  Code,
  HeartHandshake,
  Rocket,
  Ruler,
  Search,
  Smartphone,
} from "lucide-react";
import { whyChoose } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerItem, StaggerWrapper } from "@/components/MotionWrappers";
import { useSpotlight } from "@/hooks/useSpotlight";

const iconMap = {
  Rocket,
  Code,
  Ruler,
  Search,
  Smartphone,
  HeartHandshake,
};

function WhyCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  const ref = useSpotlight<HTMLDivElement>();
  const Icon = iconMap[icon as keyof typeof iconMap];

  return (
    <div
      ref={ref}
      className="spotlight-card relative p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-card hover:border-accent/20 transition-all duration-500"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export function WhyChoose() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          label="Why Choose Me"
          title="Built For Brands That Demand More"
          description="Partner with a developer who treats your store like a premium product."
        />

        <StaggerWrapper className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {whyChoose.map((item) => (
            <StaggerItem key={item.title}>
              <WhyCard {...item} />
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
}
