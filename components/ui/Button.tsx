import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      children,
      href,
      external,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111110] disabled:opacity-50 disabled:pointer-events-none select-none";

    const variants = {
      primary:
        "bg-green-400 text-[#111110] hover:bg-green-500 active:scale-[0.98]",
      secondary:
        "bg-[#1e1e1c] text-[#e8e8e6] border border-[#2a2a27] hover:border-[#3a3a37] hover:bg-[#222220] active:scale-[0.98]",
      ghost:
        "text-[#888783] hover:text-[#e8e8e6] hover:bg-[#1e1e1c] active:scale-[0.98]",
      outline:
        "border border-green-400/40 text-green-400 hover:bg-green-400/10 active:scale-[0.98]",
    };

    const sizes = {
      sm: "text-xs px-3 py-1.5",
      md: "text-sm px-4 py-2",
      lg: "text-sm px-6 py-3",
    };

    const classes = cn(base, variants[variant], sizes[size], className);

    if (href) {
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
