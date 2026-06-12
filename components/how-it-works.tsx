"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Edit, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Globe,
    title: "Visit the App",
    description:
      "Go to recoverywellnessplan.app — no account required to explore. Start by completing your wellness profile and noting where you are today.",
    color: "#e8932a",
    detail: "Takes about 5 minutes",
  },
  {
    number: "02",
    icon: Edit,
    title: "Build Your Plan",
    description:
      "Set goals in each wellness dimension, document your Recovery Capital, and create personalized action steps that fit your life and schedule.",
    color: "#c9a84c",
    detail: "Fully customizable",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Track & Grow",
    description:
      "Check in daily, celebrate sobriety milestones, and watch your Master Wellness Plan evolve as you build habits and grow stronger in recovery.",
    color: "#0d1b2e",
    detail: "Ongoing & lifelong",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-[#e8932a] text-xs font-bold tracking-[0.2em] uppercase">
            Getting Started
          </span>
          <h2 className="font-cormorant text-[#0d1b2e] mt-4 leading-tight text-[clamp(2.2rem,4.5vw,4rem)]">
            Simple. Personal. Powerful.
          </h2>
          <p className="text-[#4a5568] mt-5 max-w-xl mx-auto text-lg">
            Start building your personalized wellness plan in minutes — no
            therapist, no appointment, no waiting.
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px border-t-2 border-dashed border-[#e8d5b0]" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative mb-7">
                  <div
                    className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl"
                    style={{ backgroundColor: step.color }}
                  >
                    <Icon className="w-9 h-9 text-white" />
                  </div>
                  <div
                    className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border-2"
                    style={{ borderColor: step.color }}
                  >
                    <span
                      className="font-bold text-xs"
                      style={{ color: step.color }}
                    >
                      {i + 1}
                    </span>
                  </div>
                </div>

                <h3 className="font-cormorant text-[#0d1b2e] font-semibold text-2xl mb-3">
                  {step.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 max-w-[260px]">
                  {step.description}
                </p>
                <span
                  className="text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${step.color}12`,
                    color: step.color,
                  }}
                >
                  {step.detail}
                </span>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://recoverywellnessplan.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#0d1b2e] hover:bg-[#1a2a4a] text-white font-semibold px-9 py-4 rounded-full text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            Start Your Wellness Plan Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-[#9ca3af] text-sm mt-4">
            Free forever. No credit card. No account required to start.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
