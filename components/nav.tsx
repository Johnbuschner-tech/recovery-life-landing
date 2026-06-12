"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#dimensions", label: "8 Dimensions" },
    { href: "#how-it-works", label: "How It Works" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[#0d1b2e]/95 backdrop-blur-md shadow-xl py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#e8932a] to-[#c9a84c] flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm tracking-tight">RL</span>
          </div>
          <div>
            <span className="text-white font-cormorant font-semibold text-lg tracking-wide leading-none block">
              Recovery Life
            </span>
            <span className="text-white/50 text-[10px] tracking-widest uppercase leading-none">
              Wellness Plan
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors text-sm tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://recoverywellnessplan.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e8932a] hover:bg-[#d4831e] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg shadow-[#e8932a]/30 hover:shadow-xl hover:shadow-[#e8932a]/40 hover:-translate-y-0.5"
          >
            Start Free →
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d1b2e]/98 backdrop-blur-md border-t border-white/10 px-6 py-4 space-y-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-white/70 hover:text-white py-2.5 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://recoverywellnessplan.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#e8932a] text-white px-5 py-3 rounded-full text-center text-sm font-semibold mt-3"
              onClick={() => setMenuOpen(false)}
            >
              Start Your Free Plan →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
