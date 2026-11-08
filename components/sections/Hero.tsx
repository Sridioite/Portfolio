"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import Button from "@/components/ui/Button";
import { socialLinks } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 dot-grid opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">
        {/* Status badge */}
        <motion.div {...fadeUp(0.1)} className="mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a1a18] border border-[#2a2a27] text-xs font-mono text-[#888783]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Open to work · Seeking entry-level Software Engineer roles
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="max-w-4xl">
          <motion.div {...fadeUp(0.2)}>
            <p className="font-mono text-sm text-green-400 tracking-wider mb-4">
              Hi, I&apos;m
            </p>
          </motion.div>

          <motion.h1
            {...fadeUp(0.3)}
            className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-semibold text-[#e8e8e6] leading-[1.05] tracking-tight mb-6"
          >
            Abhishek Kumar<span className="text-green-400">.</span>
          </motion.h1>

          <motion.h2
            {...fadeUp(0.4)}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-[#888783] leading-snug mb-6 max-w-2xl"
          >
            I build{" "}
            <span className="text-[#e8e8e6]">backend systems</span> and{" "}
            <span className="text-[#e8e8e6]">AI-powered applications</span>.
          </motion.h2>

          <motion.p
            {...fadeUp(0.5)}
            className="text-base md:text-lg text-[#5c5b57] leading-relaxed max-w-xl mb-10"
          >
            Computer Science &amp; Engineering graduate (2026) from Sir M. Visvesvaraya
            Institute of Technology, Bengaluru. Skilled in Python backend
            development with FastAPI, PostgreSQL, and SQLAlchemy.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-wrap items-center gap-3"
        >
          <Button
            variant="primary"
            size="lg"
            href="#projects"
            className="group"
          >
            View Projects
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform duration-200"
            />
          </Button>

          <Button
            variant="secondary"
            size="lg"
            href="/resume.pdf"
            external
          >
            <Download size={16} />
            Download Resume
          </Button>

          <div className="flex items-center gap-2 ml-1">
            <Button
              variant="ghost"
              size="lg"
              href={socialLinks.github}
              external
              className="px-3"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href={socialLinks.linkedin}
              external
              className="px-3"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-6 hidden md:flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-xs font-mono text-[#3b3b38] tracking-widest rotate-90 origin-center">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#3b3b38] to-transparent"
          />
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a27] to-transparent origin-left"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
