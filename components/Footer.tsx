import Link from "next/link";
import { siteConfig, socialLinks } from "@/lib/constants";
import { Github, Linkedin, MessageCircle } from "lucide-react";

const iconMap = {
  Linkedin,
  Github,
  MessageCircle,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <Link href="#" className="text-xl font-bold tracking-tight">
              RR<span className="text-accent">.</span>
            </Link>
            <p className="text-text-secondary text-sm mt-2">
              Premium Shopify Liquid Development
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
          <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="text-accent">Next.js</span> &{" "}
            <span className="text-accent">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
