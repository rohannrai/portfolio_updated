"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/Button";
import { MotionWrapper } from "@/components/MotionWrappers";

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <MotionWrapper>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5" />
            <div className="absolute inset-0 border border-white/[0.08] rounded-3xl" />

            <div className="relative px-6 py-16 md:px-16 md:py-24 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                Let&apos;s Build Something{" "}
                <span className="text-gradient-gold">Great Together</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10"
              >
                Ready to elevate your Shopify store? Let&apos;s discuss your project
                and create something exceptional.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button href={`mailto:${siteConfig.email}`} size="lg">
                  <Mail size={18} />
                  Email
                </Button>
                <Button href={siteConfig.linkedin} variant="secondary" size="lg">
                  <Linkedin size={18} />
                  LinkedIn
                </Button>
                <Button href={siteConfig.github} variant="secondary" size="lg">
                  <Github size={18} />
                  GitHub
                </Button>
                <Button href={siteConfig.whatsapp} variant="secondary" size="lg">
                  <MessageCircle size={18} />
                  WhatsApp
                </Button>
              </motion.div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
