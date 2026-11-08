import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Featured projects"
      className="relative py-20 md:py-32 border-t border-[#1e1e1c]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Work"
          title="Featured projects"
          description="A selection of projects I've built — from backend APIs and network tools to AI-powered applications."
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Sridioite"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#888783] hover:text-green-400 transition-colors duration-200 group"
          >
            <span>View more on GitHub</span>
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
