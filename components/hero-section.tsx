"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d1b2e]">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-[#e8932a]/15 via-[#c9a84c]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-gradient-to-tr from-[#1a3060]/80 to-transparent" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Amber orb */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#e8932a]/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div className="space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 bg-[#e8932a]/20 border border-[#e8932a]/40 rounded-full px-4 py-1.5 text-[#e8932a] text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e8932a] animate-pulse" />
              Free · Private · Personalized
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-cormorant text-white leading-[1.08] tracking-tight text-[clamp(2.8rem,6vw,5.5rem)]"
          >
            Your Recovery.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8932a] to-[#f5c35f] italic">
              Your Plan.
            </span>
            <br />
            Your Life.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/65 text-lg leading-relaxed max-w-lg"
          >
            The Recovery Life Wellness Plan is a free, personalized app that
            helps you build a meaningful life in recovery — tracking all{" "}
            <span className="text-white/90 font-medium">
              8 Dimensions of Wellness
            </span>
            , growing your{" "}
            <span className="text-white/90 font-medium">Recovery Capital</span>,
            and creating your{" "}
            <span className="text-white/90 font-medium">
              Master Wellness Plan
            </span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://recoverywellnessplan.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#e8932a] to-[#d4831e] hover:from-[#f09d38] hover:to-[#e8932a] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-2xl shadow-[#e8932a]/40 hover:shadow-[#e8932a]/60 hover:-translate-y-0.5"
            >
              Start Your Free Plan
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white px-8 py-4 rounded-full text-base transition-all duration-300 hover:bg-white/5"
            >
              See How It Works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-2.5 pt-1"
          >
            {[
              "No account required to start",
              "Completely private — your data stays on your device",
              "Built by addiction treatment professionals",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-white/55 text-sm">
                <CheckCircle className="w-4 h-4 text-[#e8932a] flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Phone mockup */}
        <motion.div
          initial={{ opacity: 0, x: 60, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#e8932a]/35 to-[#c9a84c]/20 rounded-[60px] blur-3xl scale-[1.15]" />
            <div className="absolute inset-0 bg-[#1a3060]/30 rounded-[60px] blur-2xl scale-105" />

            {/* Phone shell */}
            <div className="relative w-[260px] md:w-[290px] bg-gradient-to-b from-[#1a2340] to-[#0a1220] rounded-[50px] p-[10px] shadow-[0_40px_100px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
              {/* Dynamic island */}
              <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[90px] h-[24px] bg-[#060c18] rounded-full z-20 ring-1 ring-white/5" />

              {/* Screen */}
              <div className="rounded-[42px] overflow-hidden bg-slate-900 h-[560px]">
                <Image
                  src="https://galaxy-prod.tlcdn.com/gen/user_35cxGzZba9uxfzJ3oAxqL0bs4ND/55cd2de0-601e-42ba-a8bd-70709bac7c09.png"
                  alt="Recovery Life Wellness Plan App Screenshot"
                  width={290}
                  height={560}
                  className="w-full h-full object-cover object-top"
                  priority
                  unoptimized
                />
              </div>

              {/* Home indicator */}
              <div className="flex justify-center pt-2.5 pb-1">
                <div className="w-24 h-1 bg-white/20 rounded-full" />
              </div>
            </div>

            {/* Floating badge - sober days */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -right-6 top-20 bg-white rounded-2xl shadow-2xl px-4 py-3 min-w-[130px]"
            >
              <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest">Days Sober</div>
              <div className="text-2xl font-bold text-[#0d1b2e] font-cormorant">247 🌟</div>
              <div className="text-[10px] text-[#e8932a] font-medium">Keep going!</div>
            </motion.div>

            {/* Floating badge - wellness score */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -left-6 bottom-24 bg-white rounded-2xl shadow-2xl px-4 py-3 min-w-[140px]"
            >
              <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest">Wellness Score</div>
              <div className="flex items-end gap-1 mt-1">
                {[65, 80, 55, 90, 70, 60, 75, 85].map((h, i) => (
                  <div key={i} className="flex-1 bg-gray-100 rounded-full" style={{ height: "24px" }}>
                    <div
                      className="bg-gradient-to-t from-[#e8932a] to-[#f5c35f] rounded-full w-full"
                      style={{ height: `${h}%`, marginTop: `${100 - h}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="text-[10px] text-green-600 font-medium mt-1">↑ +12% this week</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">
          Discover Your Plan
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-5 h-5 border-b-2 border-r-2 border-[#e8932a]/50 rotate-45"
        />
      </motion.div>
    </section>
  );
}
