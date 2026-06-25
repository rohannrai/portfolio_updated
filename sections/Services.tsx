"use client";

import {
  ArrowRightLeft,
  Boxes,
  Bug,
  Code2,
  Database,
  LayoutGrid,
  Package,
  Palette,
  Settings,
  Zap,
} from "lucide-react";
import { services } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerItem, StaggerWrapper } from "@/components/MotionWrappers";
import { useSpotlight } from "@/hooks/useSpotlight";

const iconMap = {
  Palette,
  Settings,
  LayoutGrid,
  Code2,
  Package,
  Database,
  Boxes,
  Zap,
  Bug,
  ArrowRightLeft,
};

function ServiceCard({
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
      className="spotlight-card relative group p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-card hover:border-accent/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-5 group-hover:bg-accent/20 transition-colors">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="section-padding bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          label="Services"
          title="What I Can Build For You"
          description="End-to-end Shopify development services tailored for brands that demand excellence."
        />

        <StaggerWrapper className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <ServiceCard {...service} />
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
}
