"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { MotionWrapper } from "@/components/MotionWrappers";

export function Audit() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS placeholder — replace with your EmailJS credentials
    // await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="audit" className="section-padding bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            label="Free Offer"
            title="Get a FREE Shopify Store Audit"
            description="Submit your store details and receive a comprehensive audit covering performance, UX, SEO, and conversion opportunities."
          />

          <MotionWrapper>
            <div className="gradient-border rounded-2xl">
              <div className="rounded-2xl bg-card p-6 md:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="mx-auto text-success mb-4" size={48} />
                    <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                    <p className="text-text-secondary">
                      I&apos;ll review your store and get back to you within 48 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl bg-bg border border-white/[0.08] text-text placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/40 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-bg border border-white/[0.08] text-text placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/40 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="storeUrl" className="block text-sm font-medium mb-2">
                        Store URL
                      </label>
                      <input
                        type="url"
                        id="storeUrl"
                        name="storeUrl"
                        required
                        placeholder="https://yourstore.myshopify.com"
                        className="w-full px-4 py-3 rounded-xl bg-bg border border-white/[0.08] text-text placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium mb-2">
                        Project Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        required
                        placeholder="Tell me about your store and what you'd like to improve..."
                        className="w-full px-4 py-3 rounded-xl bg-bg border border-white/[0.08] text-text placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/40 transition-colors resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
                      {loading ? "Submitting..." : "Submit Request"}
                      {!loading && <Send size={18} />}
                    </Button>

                    <p className="text-text-secondary text-xs">
                      {/* EmailJS: Replace SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY in lib/emailjs.ts */}
                      Your information is secure and will never be shared.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
