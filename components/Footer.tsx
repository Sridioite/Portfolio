"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/Sridioite",         label: "GitHub",   icon: Github   },
  { href: "https://linkedin.com/in/abhishekkji",  label: "LinkedIn", icon: Linkedin },
  { href: "mailto:abhikumar55789@gmail.com",      label: "Email",    icon: Mail     },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-[#1e1e1c] py-8"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ color: "#4ade80" }}
            transition={{ duration: 0.15 }}
            className="font-mono text-sm text-[#888783]"
            aria-label="Back to top"
          >
            <span className="text-green-400/60">&gt;</span> abhishek
            <span className="text-green-400">_</span>
          </motion.a>

          {/* Copyright */}
          <p className="text-xs text-[#3b3b38] font-mono order-3 sm:order-2">
            © {year} Abhishek Kumar · Built with Next.js &amp; Tailwind
          </p>

          {/* Social links */}
          <div className="flex items-center gap-1 order-2 sm:order-3">
            {socialLinks.map(({ href, label, icon: Icon }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ y: -3, color: "#4ade80" }}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-[#3b3b38] hover:bg-[#1a1a18] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
