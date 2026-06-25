"use client";

import { BackToTop } from "@/components/BackToTop";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { CursorGlow } from "@/components/CursorGlow";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { About } from "@/sections/About";
import { Audit } from "@/sections/Audit";
import { Contact } from "@/sections/Contact";
import { Hero } from "@/sections/Hero";
import { Process } from "@/sections/Process";
import { Projects } from "@/sections/Projects";
import { Services } from "@/sections/Services";
import { TechStackSection } from "@/sections/TechStack";
import { Testimonials } from "@/sections/Testimonials";
import { Trust } from "@/sections/Trust";
import { WhyChoose } from "@/sections/WhyChoose";
import { PageTransition } from "@/components/MotionWrappers";

export function HomePage() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgressBar />
      <CursorGlow />
      <div className="noise-overlay" />
      <BackgroundEffects />
      <Navbar />

      <PageTransition>
        <main>
          <Hero />
          <Trust />
          <About />
          <Services />
          <Projects />
          <Process />
          <WhyChoose />
          <Testimonials />
          <TechStackSection />
          <Audit />
          <Contact />
        </main>
        <Footer />
      </PageTransition>

      <BackToTop />
    </>
  );
}
