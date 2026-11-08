"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Github } from "lucide-react";
import { useRef } from "react";
import type { Project } from "@/types";
import Tag from "./Tag";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  /* Subtle tilt on mouse move */
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform =
        "perspective(800px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-glow-hover
      style={{ transition: "transform 0.18s ease, box-shadow 0.3s ease" }}
      className="group flex flex-col rounded-xl bg-[#1a1a18] border border-[#2a2a27] hover:border-green-400/20 overflow-hidden hover:shadow-[0_0_30px_rgba(74,222,128,0.07)]"
      aria-label={`Project: ${project.title}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/9] bg-[#111110]">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
          />
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a18] via-[#1a1a18]/20 to-transparent" />

        {/* Floating action button */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200"
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub`}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.92 }}
            className="w-8 h-8 rounded-lg bg-[#111110]/80 backdrop-blur-sm border border-[#2a2a27] flex items-center justify-center text-[#888783] hover:text-[#e8e8e6] hover:border-green-400/30 transition-colors duration-150"
          >
            <Github size={14} />
          </motion.a>
        </motion.div>

        {/* Shimmer sweep on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(74,222,128,0.06) 50%, transparent 60%)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPositionX: ["200%", "-200%"] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <motion.h3
          className="text-base font-semibold text-[#e8e8e6] mb-2"
          whileHover={{ color: "#fff" }}
          transition={{ duration: 0.15 }}
        >
          {project.title}
        </motion.h3>

        <p className="text-sm text-[#888783] leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags — stagger on card entry */}
        <motion.div
          className="flex flex-wrap gap-1.5 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.04, delayChildren: index * 0.12 + 0.2 },
            },
          }}
        >
          {project.tags.map((tag) => (
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

        {/* Footer */}
        <div className="flex items-center pt-4 border-t border-[#2a2a27]">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 2, color: "#e8e8e6" }}
            className="inline-flex items-center gap-1.5 text-xs text-[#888783] transition-colors duration-200"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={13} />
            <span>Source Code</span>
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}
