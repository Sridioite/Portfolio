import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Tag from "@/components/ui/Tag";
import { experiences } from "@/lib/data";
import { Briefcase, GraduationCap } from "lucide-react";

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
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-8">
                <Briefcase size={16} className="text-green-400" />
                <h3 className="text-sm font-mono text-[#888783] uppercase tracking-widest">
                  Experience
                </h3>
              </div>
            </AnimatedSection>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[#2a2a27]" aria-hidden="true" />

              <div className="space-y-8">
                {work.map((item, i) => (
                  <AnimatedSection key={item.id} delay={i * 0.1}>
                    <div className="relative pl-6">
                      {/* Timeline dot */}
                      <div
                        className="absolute left-0 top-1.5 w-2 h-2 rounded-full border-2 border-green-400 bg-[#111110] -translate-x-[3px]"
                        aria-hidden="true"
                      />

                      <div className="group p-5 rounded-xl bg-[#1a1a18] border border-[#2a2a27] hover:border-[#3a3a37] transition-all duration-300">
                        <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                          <h4 className="text-sm font-semibold text-[#e8e8e6]">
                            {item.title}
                          </h4>
                          <span className="text-xs font-mono text-[#888783] whitespace-nowrap">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-xs text-green-400/70 font-mono mb-3">
                          {item.organization}
                        </p>
                        <p className="text-sm text-[#888783] leading-relaxed mb-3">
                          {item.description}
                        </p>
                        {item.tags && (
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags.map((tag) => (
                              <Tag key={tag}>{tag}</Tag>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-8">
                <GraduationCap size={16} className="text-green-400" />
                <h3 className="text-sm font-mono text-[#888783] uppercase tracking-widest">
                  Education
                </h3>
              </div>
            </AnimatedSection>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[#2a2a27]" aria-hidden="true" />

              <div className="space-y-8">
                {education.map((item, i) => (
                  <AnimatedSection key={item.id} delay={i * 0.1}>
                    <div className="relative pl-6">
                      <div
                        className="absolute left-0 top-1.5 w-2 h-2 rounded-full border-2 border-green-400/50 bg-[#111110] -translate-x-[3px]"
                        aria-hidden="true"
                      />

                      <div className="group p-5 rounded-xl bg-[#1a1a18] border border-[#2a2a27] hover:border-[#3a3a37] transition-all duration-300">
                        <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                          <h4 className="text-sm font-semibold text-[#e8e8e6]">
                            {item.title}
                          </h4>
                          <span className="text-xs font-mono text-[#888783] whitespace-nowrap">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-xs text-green-400/70 font-mono mb-3">
                          {item.organization}
                        </p>
                        <p className="text-sm text-[#888783] leading-relaxed mb-3">
                          {item.description}
                        </p>
                        {item.tags && (
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags.map((tag) => (
                              <Tag key={tag}>{tag}</Tag>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
