"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import Button from "@/components/ui/Button";
import { socialLinks } from "@/lib/data";

/* ── Typed text hook ─────────────────────────────────────── */
function useTyped(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    const delay = deleting ? speed / 2 : charIdx === word.length ? pause : speed;

    const timer = setTimeout(() => {
      if (!deleting && charIdx < word.length) {
        setDisplay(word.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === word.length) {
        setDeleting(true);
      } else if (deleting && charIdx > 0) {
        setDisplay(word.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

/* ── Floating orb ────────────────────────────────────────── */
function FloatingOrb({
  size,
  x,
  y,
  duration,
  delay,
  color,
}: {
  size: number;
  x: string;
  y: string;
  duration: number;
  delay: number;
  color: string;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none blur-3xl"
      style={{ width: size, height: size, left: x, top: y, background: color }}
      animate={{
        y: [0, -30, 0, 20, 0],
        x: [0, 15, -10, 5, 0],
        scale: [1, 1.08, 0.96, 1.04, 1],
        opacity: [0.4, 0.6, 0.35, 0.55, 0.4],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    />
  );
}

/* ── Particle dot ────────────────────────────────────────── */
function Particle({ delay }: { delay: number }) {
  const startX = Math.random() * 100;
  return (
    <motion.div
      className="absolute w-px h-px rounded-full bg-green-400/60 pointer-events-none"
      style={{ left: `${startX}%`, bottom: "0%" }}
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: [0, 0.8, 0],
        y: [0, -(120 + Math.random() * 200)],
        x: [0, (Math.random() - 0.5) * 40],
      }}
      transition={{
        duration: 3 + Math.random() * 3,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
      aria-hidden="true"
    />
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

export default function Hero() {
  const typed = useTyped([
    "backend systems.",
    "AI-powered apps.",
    "REST APIs.",
    "scalable services.",
  ]);

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" aria-hidden="true" />

      {/* Floating orbs */}
      <FloatingOrb size={500} x="60%" y="5%"  duration={12} delay={0}   color="rgba(74,222,128,0.055)" />
      <FloatingOrb size={350} x="10%" y="50%" duration={15} delay={2}   color="rgba(74,222,128,0.04)"  />
      <FloatingOrb size={250} x="75%" y="60%" duration={10} delay={1.5} color="rgba(74,222,128,0.03)"  />

      {/* Rising particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <Particle key={i} delay={i * 0.45} />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">

        {/* Status badge */}
        <motion.div {...fadeUp(0.1)} className="mb-8">
          <motion.span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a1a18] border border-[#2a2a27] text-xs font-mono text-[#888783]"
            whileHover={{ borderColor: "rgba(74,222,128,0.35)", color: "#b0afab" }}
            transition={{ duration: 0.2 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Open to work · Seeking entry-level Software Engineer roles
          </motion.span>
        </motion.div>

        <div className="max-w-4xl">
          {/* "Hi, I'm" */}
          <motion.div {...fadeUp(0.2)}>
            <p className="font-mono text-sm text-green-400 tracking-wider mb-4">
              Hi, I&apos;m
            </p>
          </motion.div>

          {/* Name — letter stagger */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-semibold text-[#e8e8e6] leading-[1.05] tracking-tight mb-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.04, delayChildren: 0.3 } },
            }}
          >
            {"Abhishek Kumar".split("").map((ch, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40, rotateX: -40 },
                  visible: { opacity: 1, y: 0, rotateX: 0 },
                }}
                transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                style={{ display: ch === " " ? "inline" : "inline-block" }}
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
            <motion.span
              className="text-green-400"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.4, type: "spring", stiffness: 300 }}
            >
              .
            </motion.span>
          </motion.h1>

          {/* Typed subtitle */}
          <motion.h2
            {...fadeUp(0.5)}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-[#888783] leading-snug mb-6 max-w-2xl"
          >
            I build{" "}
            <span className="text-[#e8e8e6] inline-block min-w-[200px]">
              {typed}
              <motion.span
                className="text-green-400 ml-0.5"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "steps(1)" }}
              >
                |
              </motion.span>
            </span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.6)}
            className="text-base md:text-lg text-[#5c5b57] leading-relaxed max-w-xl mb-10"
          >
            Computer Science &amp; Engineering graduate (2026) from Sir M. Visvesvaraya
            Institute of Technology, Bengaluru. Skilled in Python backend
            development with FastAPI, PostgreSQL, and SQLAlchemy.
          </motion.p>
        </div>

        {/* CTA Buttons — stagger in */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } },
          }}
          className="flex flex-wrap items-center gap-3"
        >
          {[
            <Button key="projects" variant="primary" size="lg" href="#projects" className="group">
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Button>,
            <Button key="resume" variant="secondary" size="lg" href="/resume.pdf" external>
              <Download size={16} />
              Download Resume
            </Button>,
            <div key="socials" className="flex items-center gap-2">
              <Button variant="ghost" size="lg" href={socialLinks.github} external className="px-3" aria-label="GitHub">
                <Github size={18} />
              </Button>
              <Button variant="ghost" size="lg" href={socialLinks.linkedin} external className="px-3" aria-label="LinkedIn">
                <Linkedin size={18} />
              </Button>
            </div>,
          ].map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
            >
              {child}
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-10 left-6 hidden md:flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-xs font-mono text-[#2a2a27] tracking-widest"
            style={{ writingMode: "vertical-rl" }}>
            scroll down
          </span>
          <motion.div
            animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 0.7, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-green-400/40 to-transparent"
          />
        </motion.div>

        {/* Bottom divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.0, duration: 1.0, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a27] to-transparent origin-left"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
