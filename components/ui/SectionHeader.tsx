import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <AnimatedSection>
        <span className="inline-block font-mono text-xs text-green-400 tracking-widest uppercase mb-3">
          {eyebrow}
        </span>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#e8e8e6] leading-tight mb-4">
          {title}
        </h2>
      </AnimatedSection>
      {description && (
        <AnimatedSection delay={0.2}>
          <p
            className={cn(
              "text-[#888783] text-base md:text-lg leading-relaxed max-w-2xl",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
