"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { skillCategories } from "@/lib/data";

/* ── Staggered skill tags ───────────────────────────────── */
function SkillTag({ name, delay }: { name: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.75, y: 8 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay, ease: "easeOut" }}
      whileHover={{
        scale: 1.08,
        borderColor: "rgba(74,222,128,0.4)",
        color: "#b0afab",
        transition: { duration: 0.15 },
      }}
      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#111110] border border-[#2a2a27] text-[#888783] cursor-default select-none"
    >
      {name}
    </motion.span>
  );
}

/* ── Category card ──────────────────────────────────────── */
function CategoryCard({
  category,
  skills,
  cardDelay,
}: {
  category: string;
  skills: { name: string }[];
  cardDelay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: cardDelay, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group p-6 rounded-xl bg-[#1a1a18] border border-[#2a2a27] hover:border-[#3a3a37] transition-colors duration-300 h-full"
    >
      {/* Category header */}
      <div className="flex items-center gap-2 mb-5">
        <motion.div
          className="w-1 h-4 rounded-full bg-green-400/50"
          whileInView={{ scaleY: [0, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: cardDelay + 0.15 }}
          style={{ originY: 1 }}
        />
        <span className="text-xs font-mono text-green-400/80 uppercase tracking-widest">
          {category}
        </span>
      </div>

      {/* Skills — staggered */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, si) => (
          <SkillTag
            key={skill.name}
            name={skill.name}
            delay={cardDelay + 0.1 + si * 0.06}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section
      id="stack"
      aria-label="Tech stack"
      className="relative py-20 md:py-32 border-t border-[#1e1e1c]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Expertise"
          title="Tech stack"
          description="Tools and technologies I use to build backend systems, APIs, and AI-powered applications."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <CategoryCard
              key={cat.category}
              category={cat.category}
              skills={cat.skills}
              cardDelay={ci * 0.07}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
