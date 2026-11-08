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
    title: "Full-Stack Development",
    text: "End-to-end apps with FastAPI backends, Jinja2/Bootstrap frontends, deployed via Docker, Nginx, and AWS S3.",
  },
  {
    icon: Network,
    title: "Networking & Systems",
    text: "Deep packet inspection, TCP/IP & TLS parsing, PCAP analysis, and network traffic classification.",
  },
  {
    icon: FlaskConical,
    title: "Testing & Quality",
    text: "Writing Pytest suites, automation testing workflows, and structured debugging for reliable APIs.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="About me"
      className="relative py-20 md:py-32 border-t border-[#1e1e1c]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: Text */}
          <div>
            <SectionHeader eyebrow="About" title="Who I am" />

            <div className="space-y-4 text-[#888783] leading-relaxed">
              <AnimatedSection delay={0.1}>
                <p className="text-base md:text-lg text-[#b0afab]">
                  I&apos;m Abhishek Kumar, a Computer Science &amp; Engineering
                  graduate (2026) from Sir M. Visvesvaraya Institute of
                  Technology, Bengaluru, with a CGPA of 8.24.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-base">
                  My focus is Python backend development — building clean,
                  well-documented REST APIs with FastAPI, managing data with
                  PostgreSQL and SQLAlchemy, and shipping production-grade
                  apps with Docker, Nginx, and AWS. I&apos;ve also worked deep
                  in the networking stack, building a packet inspection tool
                  that classifies traffic even in encrypted TLS streams.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="text-base">
                  I&apos;m actively seeking an entry-level Software Engineer or
                  Python Backend Developer role where I can contribute,
                  grow fast, and ship meaningful products.
                </p>
              </AnimatedSection>
            </div>

            {/* Quick facts */}
            <AnimatedSection delay={0.4} className="mt-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Degree", value: "BE CSE" },
                  { label: "CGPA", value: "8.24" },
                  { label: "Graduating", value: "2026" },
                  { label: "Location", value: "Bengaluru, KA" },
                  { label: "College", value: "SMVIT" },
                  { label: "Focus", value: "Python Backend" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-xs font-mono text-[#3b3b38] uppercase tracking-wider mb-1">
                      {label}
                    </p>
                    <p className="text-sm text-[#e8e8e6] font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <AnimatedSection key={item.title} delay={0.1 + i * 0.1}>
                <div className="group p-5 rounded-xl bg-[#1a1a18] border border-[#2a2a27] hover:border-[#3a3a37] transition-all duration-300 h-full">
                  <div className="w-9 h-9 rounded-lg bg-[#111110] border border-[#2a2a27] flex items-center justify-center mb-4 group-hover:border-green-400/30 transition-colors duration-300">
                    <item.icon
                      size={17}
                      className="text-green-400 opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-[#e8e8e6] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#888783] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
