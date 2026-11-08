"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { Terminal, Cpu, Network, FlaskConical } from "lucide-react";

const highlights = [
  {
    icon: Terminal,
    title: "Python Backend",
    text: "Building scalable REST APIs with FastAPI, SQLAlchemy ORM, Pydantic, Alembic, and PostgreSQL.",
  },
  {
    icon: Cpu,
    title: "Full-Stack Dev",
    text: "End-to-end apps with FastAPI backends, Jinja2/Bootstrap frontends, deployed via Docker, Nginx, and AWS S3.",
  },
  {
    icon: Network,
    title: "Networking",
    text: "Deep packet inspection, TCP/IP & TLS parsing, PCAP analysis, and network traffic classification.",
  },
  {
    icon: FlaskConical,
    title: "Testing & QA",
    text: "Writing Pytest suites, automation testing workflows, and structured debugging for reliable APIs.",
  },
];

/* ── Animated number counter ──────────────────────────── */
function AnimatedStat({
  label,
  value,
  isNumber,
}: {
  label: string;
  value: string;
  isNumber?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => (isNumber ? v.toFixed(2) : value));

  useEffect(() => {
    if (inView && isNumber) {
      animate(mv, parseFloat(value), { duration: 1.6, ease: "easeOut" });
    }
  }, [inView, isNumber, mv, value]);

  return (
    <div ref={ref}>
      <p className="text-xs font-mono text-[#3b3b38] uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-sm text-[#e8e8e6] font-medium">
        {isNumber ? <motion.span>{rounded}</motion.span> : value}
      </p>
    </div>
  );
}

/* ── Highlight card with tilt ─────────────────────────── */
function HighlightCard({
  item,
  delay,
}: {
  item: (typeof highlights)[0];
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (ref.current)
      ref.current.style.transform =
        "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <AnimatedSection delay={delay}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        data-glow-hover
        style={{ transition: "transform 0.2s ease" }}
        className="group p-4 rounded-xl bg-[#1a1a18] border border-[#2a2a27] hover:border-green-400/25 h-full cursor-default"
      >
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
          transition={{ duration: 0.4 }}
          className="w-8 h-8 rounded-lg bg-[#111110] border border-[#2a2a27] flex items-center justify-center mb-3 group-hover:border-green-400/30 transition-colors duration-300"
        >
          <item.icon
            size={15}
            className="text-green-400 opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </motion.div>
        <h3 className="text-xs font-semibold text-[#e8e8e6] mb-1.5">{item.title}</h3>
        <p className="text-xs text-[#888783] leading-relaxed">{item.text}</p>
      </div>
    </AnimatedSection>
  );
}

export default function About() {
  return (
    <section
      id="about"
      aria-label="About me"
      className="relative py-20 md:py-32 border-t border-[#1e1e1c]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="About" title="Who I am" />

        {/* ── Main grid: bio | photo | cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-8 items-start">

          {/* ── Col 1: Bio text + stats ── */}
          <div>
            <div className="space-y-4 text-[#888783] leading-relaxed mb-8">
              <AnimatedSection delay={0.1}>
                <p className="text-base md:text-lg text-[#b0afab]">
                  I&apos;m Abhishek Kumar, a Computer Science &amp; Engineering
                  graduate (2026) from Sir M. Visvesvaraya Institute of
                  Technology, Bengaluru, with a CGPA of 8.24.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-sm">
                  My focus is Python backend development — building clean,
                  well-documented REST APIs with FastAPI, managing data with
                  PostgreSQL and SQLAlchemy, and shipping production-grade
                  apps with Docker, Nginx, and AWS.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="text-sm">
                  I&apos;m actively seeking an entry-level Software Engineer or
                  Python Backend Developer role where I can contribute,
                  grow fast, and ship meaningful products.
                </p>
              </AnimatedSection>
            </div>

            {/* Stats grid */}
            <AnimatedSection delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#1a1a18] border border-[#2a2a27]">
                {[
                  { label: "Degree",     value: "BE CSE",         isNumber: false },
                  { label: "CGPA",       value: "8.24",           isNumber: true  },
                  { label: "Graduating", value: "2026",           isNumber: false },
                  { label: "Location",   value: "Bengaluru, KA",  isNumber: false },
                  { label: "College",    value: "SMVIT",          isNumber: false },
                  { label: "Focus",      value: "Python Backend", isNumber: false },
                ].map((stat) => (
                  <AnimatedStat key={stat.label} {...stat} />
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* ── Col 2: Photo ── */}
          <AnimatedSection delay={0.15} direction="none" className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-[200px] md:w-[220px] shrink-0"
            >
              {/* Outer glow ring */}
              <div
                className="absolute -inset-[3px] rounded-2xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(74,222,128,0.25) 0%, transparent 50%, rgba(74,222,128,0.1) 100%)",
                }}
                aria-hidden="true"
              />

              {/* Photo container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#2a2a27] bg-[#1a1a18]">
                <Image
                  src="/images/abhishek.jpg"
                  alt="Abhishek Kumar"
                  width={220}
                  height={300}
                  className="w-full object-cover object-top"
                  style={{ aspectRatio: "3/4" }}
                  priority
                />
                {/* Subtle dark bottom fade so it blends with the bg */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(17,17,16,0.5) 0%, transparent 100%)",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* "Available" badge pinned to bottom */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a1a18] border border-[#2a2a27] text-xs font-mono text-[#888783]">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Open to work
                </span>
              </motion.div>
            </motion.div>
          </AnimatedSection>

          {/* ── Col 3: Highlight cards ── */}
          <div className="grid grid-cols-2 gap-3 mt-6 md:mt-0">
            {highlights.map((item, i) => (
              <HighlightCard key={item.title} item={item} delay={0.1 + i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
