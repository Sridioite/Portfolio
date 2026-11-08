"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { navLinks, socialLinks } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // Allow time for menu close animation
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#111110]/90 backdrop-blur-md border-b border-[#2a2a27]"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#"
            className="font-mono text-sm font-medium text-[#e8e8e6] hover:text-green-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded"
            aria-label="Abhishek – Home"
          >
            <span className="text-green-400">&gt;</span> abhishek
            <span className="animate-[blink_1s_step-end_infinite] text-green-400">
              _
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm text-[#888783] hover:text-[#e8e8e6] transition-colors duration-200 rounded-lg hover:bg-[#1e1e1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Resume button + mobile toggle */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              href="/resume.pdf"
              external
              className="hidden md:inline-flex"
            >
              <FileText size={14} />
              Resume
            </Button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="md:hidden p-2 text-[#888783] hover:text-[#e8e8e6] rounded-lg hover:bg-[#1e1e1c] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#111110]/95 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <div className="relative h-full flex flex-col items-center justify-center gap-2 px-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full max-w-xs text-center py-4 text-xl font-medium text-[#888783] hover:text-[#e8e8e6] transition-colors duration-200 border-b border-[#1e1e1c] last:border-0"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                className="mt-4"
              >
                <Button
                  variant="outline"
                  size="lg"
                  href="/resume.pdf"
                  external
                  className="w-full max-w-xs justify-center"
                >
                  <FileText size={16} />
                  Download Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
