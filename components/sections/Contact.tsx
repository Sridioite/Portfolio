"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const contactLinks = [
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
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/mzeeqojw", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try emailing me directly at abhikumar55789@gmail.com");
      }
    } catch {
      alert("Network error. Please try emailing me directly at abhikumar55789@gmail.com");
    } finally {
      setIsLoading(false);
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-lg bg-[#111110] border text-sm text-[#e8e8e6] placeholder-[#3b3b38] focus:outline-none transition-all duration-200 resize-none";

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
              description="I'm open to backend engineering, full-stack, and Python developer opportunities. Let's connect."
            />

            <motion.div
              className="space-y-3 mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
              }}
            >
              {contactLinks.map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  variants={{
                    hidden: { opacity: 0, x: -24 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
                  }}
                  whileHover={{ x: 4, borderColor: "rgba(74,222,128,0.25)" }}
                  transition={{ duration: 0.18 }}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-[#1a1a18] border border-[#2a2a27] transition-colors duration-200"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -12, 12, 0], scale: 1.15 }}
                    transition={{ duration: 0.35 }}
                    className="w-9 h-9 rounded-lg bg-[#111110] border border-[#2a2a27] flex items-center justify-center group-hover:border-green-400/30 transition-colors duration-200 shrink-0"
                  >
                    <Icon size={16} className="text-green-400 opacity-70 group-hover:opacity-100" />
                  </motion.div>
                  <div>
                    <p className="text-xs text-[#888783] font-mono">{label}</p>
                    <p className="text-sm text-[#e8e8e6] group-hover:text-white transition-colors">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full min-h-[360px] flex flex-col items-center justify-center text-center gap-4 p-8 rounded-xl bg-[#1a1a18] border border-[#2a2a27]"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.15, duration: 0.5, type: "spring", stiffness: 200 }}
                    className="w-14 h-14 rounded-full bg-green-400/10 border border-green-400/25 flex items-center justify-center"
                  >
                    <CheckCircle size={24} className="text-green-400" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg font-semibold text-[#e8e8e6]"
                  >
                    Message sent!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm text-[#888783]"
                  >
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-green-400/60 hover:text-green-400 transition-colors mt-2"
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4 p-6 rounded-xl bg-[#1a1a18] border border-[#2a2a27]"
                  noValidate
                >
                  {[
                    { id: "name",    type: "text",  placeholder: "Your name",           label: "Name"    },
                    { id: "email",   type: "email", placeholder: "you@example.com",     label: "Email"   },
                  ].map(({ id, type, placeholder, label }) => (
                    <div key={id}>
                      <label
                        htmlFor={id}
                        className="block text-xs font-mono text-[#888783] mb-2 uppercase tracking-wider"
                      >
                        {label}
                      </label>
                      <div className="relative">
                        <input
                          id={id}
                          name={id}
                          type={type}
                          required
                          autoComplete={id}
                          value={formState[id as keyof typeof formState]}
                          onChange={handleChange}
                          onFocus={() => setFocusedField(id)}
                          onBlur={() => setFocusedField(null)}
                          placeholder={placeholder}
                          className={`${inputBase} ${
                            focusedField === id
                              ? "border-green-400/50 ring-1 ring-green-400/15"
                              : "border-[#2a2a27]"
                          }`}
                        />
                        {/* Focus line */}
                        <motion.div
                          className="absolute bottom-0 left-0 h-px bg-green-400/50 rounded-full"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: focusedField === id ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ originX: 0 }}
                        />
                      </div>
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-[#888783] mb-2 uppercase tracking-wider"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Tell me about your project or opportunity..."
                        className={`${inputBase} ${
                          focusedField === "message"
                            ? "border-green-400/50 ring-1 ring-green-400/15"
                            : "border-[#2a2a27]"
                        }`}
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-px bg-green-400/50 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: focusedField === "message" ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ originX: 0 }}
                      />
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
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
                            transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
                            className="w-4 h-4 border-2 border-[#111110]/30 border-t-[#111110] rounded-full inline-block"
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
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
