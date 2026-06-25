"use client";

import { processSteps } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerItem, StaggerWrapper } from "@/components/MotionWrappers";

export function Process() {
  return (
    <section id="process" className="section-padding bg-bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          label="Process"
          title="How We Work Together"
          description="A proven workflow that delivers exceptional results on time, every time."
        />

        <div className="hidden lg:block relative">
          <div className="absolute top-[52px] left-0 right-0 h-px bg-white/[0.08]" />

          <StaggerWrapper className="grid grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="relative text-center">
                  <div className="relative z-10 mx-auto mb-6 flex h-[104px] w-[104px] items-center justify-center rounded-2xl border border-white/[0.08] bg-card">
                    <span className="text-2xl font-bold text-accent">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed px-2">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerWrapper>
        </div>

        <div className="lg:hidden">
          <StaggerWrapper className="space-y-0">
            {processSteps.map((step, i) => (
              <StaggerItem key={step.step}>
                <div className="relative pl-10 pb-10 last:pb-0">
                  {i !== processSteps.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-px bg-white/[0.08]" />
                  )}
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-card">
                    <span className="text-sm font-bold text-accent">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerWrapper>
        </div>
      </div>
    </section>
  );
}
