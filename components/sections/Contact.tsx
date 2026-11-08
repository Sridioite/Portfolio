"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission — replace with actual endpoint or Formspree
    await new Promise((r) => setTimeout(r, 1200));
    setIsLoading(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-[#1a1a18] border border-[#2a2a27] text-sm text-[#e8e8e6] placeholder-[#3b3b38] focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/20 transition-colors duration-200";

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative py-20 md:py-32 border-t border-[#1e1e1c]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: Info */}
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Let's work together"
              description="I'm currently open to backend engineering, full-stack, and AI/ML engineering opportunities. Let's connect."
            />

            <div className="space-y-4 mt-8">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "abhikumar55789@gmail.com",
                  href: "mailto:abhikumar55789@gmail.com",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "github.com/Sridioite",
                  href: "https://github.com/Sridioite",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "linkedin.com/in/abhishekkji",
                  href: "https://linkedin.com/in/abhishekkji",
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <AnimatedSection key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={
                      href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="group flex items-center gap-4 p-4 rounded-xl bg-[#1a1a18] border border-[#2a2a27] hover:border-[#3a3a37] transition-all duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#111110] border border-[#2a2a27] flex items-center justify-center group-hover:border-green-400/30 transition-colors duration-200">
                      <Icon size={16} className="text-green-400 opacity-70 group-hover:opacity-100" />
                    </div>
                    <div>
                      <p className="text-xs text-[#888783] font-mono">{label}</p>
                      <p className="text-sm text-[#e8e8e6] group-hover:text-white transition-colors">
                        {value}
                      </p>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <AnimatedSection delay={0.2}>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center gap-4 p-8 rounded-xl bg-[#1a1a18] border border-[#2a2a27]"
              >
                <div className="w-12 h-12 rounded-full bg-green-400/10 border border-green-400/20 flex items-center justify-center">
                  <CheckCircle size={22} className="text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-[#e8e8e6]">
                  Message sent!
                </h3>
                <p className="text-sm text-[#888783]">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-green-400/70 hover:text-green-400 transition-colors mt-2"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 p-6 rounded-xl bg-[#1a1a18] border border-[#2a2a27]"
                noValidate
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-[#888783] mb-2 uppercase tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-[#888783] mb-2 uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-[#888783] mb-2 uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-[#111110]/30 border-t-[#111110] rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
