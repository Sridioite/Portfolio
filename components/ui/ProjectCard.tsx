"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import Tag from "./Tag";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group flex flex-col rounded-xl bg-[#1a1a18] border border-[#2a2a27] hover:border-[#3a3a37] overflow-hidden transition-all duration-300 hover:-translate-y-1"
      aria-label={`Project: ${project.title}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/9] bg-[#111110]">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a18] via-transparent to-transparent" />

        {/* Links on hover */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub repository`}
            className="w-8 h-8 rounded-lg bg-[#111110]/80 backdrop-blur-sm border border-[#2a2a27] flex items-center justify-center text-[#888783] hover:text-[#e8e8e6] hover:border-[#3a3a37] transition-colors duration-200"
          >
            <Github size={14} />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            className="w-8 h-8 rounded-lg bg-[#111110]/80 backdrop-blur-sm border border-[#2a2a27] flex items-center justify-center text-[#888783] hover:text-[#e8e8e6] hover:border-[#3a3a37] transition-colors duration-200"
          >
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-semibold text-[#e8e8e6] mb-2 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-[#888783] leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {/* Footer links */}
        <div className="flex items-center gap-3 pt-4 border-t border-[#2a2a27]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#888783] hover:text-[#e8e8e6] transition-colors duration-200"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={13} />
            <span>Source</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#888783] hover:text-green-400 transition-colors duration-200 ml-auto"
            aria-label={`View ${project.title} live demo`}
          >
            <span>Live Demo</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
