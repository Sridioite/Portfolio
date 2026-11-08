import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { skillCategories } from "@/lib/data";

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
            <AnimatedSection key={cat.category} delay={ci * 0.08}>
              <div className="group p-6 rounded-xl bg-[#1a1a18] border border-[#2a2a27] hover:border-[#3a3a37] transition-all duration-300 h-full">
                {/* Category header */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-1 h-4 rounded-full bg-green-400/50" />
                  <span className="text-xs font-mono text-green-400/80 uppercase tracking-widest">
                    {cat.category}
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#111110] border border-[#2a2a27] text-[#888783] hover:border-green-400/25 hover:text-[#b0afab] transition-all duration-200 cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
