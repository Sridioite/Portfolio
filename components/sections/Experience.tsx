"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import { experiences } from "@/lib/data";
import { Briefcase, GraduationCap } from "lucide-react";

/* ── Animated timeline line ─────────────────────────────── */
function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="absolute left-0 top-0 bottom-0 w-px overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#2a2a27]" />
      <motion.div
        className="absolute top-0 left-0 w-full bg-green-400/30"
        initial={{ height: "0%" }}
        animate={inView ? { height: "100%" } : {}}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  );
}

/* ── Timeline item ───────────────────────────────────────── */
function TimelineItem({
  item,
  index,
  accent,
}: {
  item: (typeof experiences)[0];
  index: number;
  accent: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative pl-6"
    >
      {/* Dot */}
      <div className="absolute left-0 top-2 -translate-x-[3px]" aria-hidden="true">
        <motion.div
          className={`w-2.5 h-2.5 rounded-full border-2 bg-[#111110] ${
            accent ? "border-green-400" : "border-green-400/40"
          }`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.12 + 0.2, type: "spring", stiffness: 400 }}
        />
        {/* Ping ring */}
        {accent && (
          <motion.div
            className="absolute inset-0 rounded-full border border-green-400/30"
            animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -3, borderColor: "rgba(74,222,128,0.2)" }}
        transition={{ duration: 0.2 }}
        className="p-5 rounded-xl bg-[#1a1a18] border border-[#2a2a27] transition-colors duration-300"
      >
        <div className="flex items-start justify-between gap-2 mb-1.5 flex-wrap">
          <h4 className="text-sm font-semibold text-[#e8e8e6]">{item.title}</h4>
          <span className="text-xs font-mono text-[#888783] whitespace-nowrap shrink-0">
            {item.period}
          </span>
        </div>
        <p className="text-xs text-green-400/70 font-mono mb-3">{item.organization}</p>
        <p className="text-sm text-[#888783] leading-relaxed mb-3">{item.description}</p>
        {item.tags && (
          <motion.div
            className="flex flex-wrap gap-1.5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
            }}
          >
            {item.tags.map((tag) => (
              <motion.div
                key={tag}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
                }}
              >
                <Tag>{tag}</Tag>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const work = experiences.filter((e) => e.type === "work");
  const education = experiences.filter((e) => e.type === "education");

  return (
    <section
      id="experience"
      aria-label="Experience and education"
      className="relative py-20 md:py-32 border-t border-[#1e1e1c]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Journey"
          title="Experience & Education"
          description="Where I've worked and what I've studied."
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">

          {/* Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-8"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <Briefcase size={16} className="text-green-400" />
              </motion.div>
              <h3 className="text-sm font-mono text-[#888783] uppercase tracking-widest">
                Experience
              </h3>
            </motion.div>

            <div className="relative">
              <TimelineLine />
              <div className="space-y-6">
                {work.map((item, i) => (
                  <TimelineItem key={item.id} item={item} index={i} accent={i === 0} />
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 mb-8"
            >
              <motion.div
                whileHover={{ rotate: -15, scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <GraduationCap size={16} className="text-green-400" />
              </motion.div>
              <h3 className="text-sm font-mono text-[#888783] uppercase tracking-widest">
                Education
              </h3>
            </motion.div>

            <div className="relative">
              <TimelineLine />
              <div className="space-y-6">
                {education.map((item, i) => (
                  <TimelineItem key={item.id} item={item} index={i} accent={false} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
