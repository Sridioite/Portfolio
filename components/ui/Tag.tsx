import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent";
}

export default function Tag({
  children,
  className,
  variant = "default",
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono border transition-colors duration-200",
        variant === "default" &&
          "bg-[#1a1a18] border-[#2a2a27] text-[#888783] hover:border-green-400/30 hover:text-green-400/80",
        variant === "accent" &&
          "bg-green-400/10 border-green-400/20 text-green-400",
        className
      )}
    >
      {children}
    </span>
  );
}
