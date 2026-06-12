"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertCircle, TrendingUp, Heart } from "lucide-react";

const points = [
  {
    icon: AlertCircle,
    problem: "No clear picture of where you stand",
    solution:
      "Our wellness tracking across all 8 dimensions gives you a real-time, holistic view of your whole-person health — so you always know where you are on the journey.",
    color: "#e8932a",
  },
  {
    icon: TrendingUp,
    problem: "Not knowing what to work on next",
    solution:
      "Your personalized action plans guide you through concrete steps in each wellness dimension — one habit, one goal, one day at a time.",
    color: "#c9a84c",
  },
  {
    icon: Heart,
    problem: "Feeling like recovery is only about what you stopped",
    solution:
      "Track your Recovery Capital — the very real strengths, relationships, and resources you already have that fuel your lasting recovery.",
    color: "#0d1b2e",
  },
];

export function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 bg-[#fdf8f0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Headline + statement */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#e8932a] text-xs font-bold tracking-[0.2em] uppercase">
              Why a Wellness Plan?
            </span>
            <h2 className="font-cormorant text-[#0d1b2e] mt-4 leading-[1.1] tracking-tight text-[clamp(2.2rem,4.5vw,4rem)]">
              Sobriety is the beginning,
              <br />
              <span className="italic text-[#e8932a]">
                not the destination.
              </span>
            </h2>
            <div className="mt-8 space-y-5">
              <p className="text-[#4a5568] text-lg leading-relaxed">
                Research consistently shows that lasting recovery requires
                thriving across every area of life — not just abstaining from
                substances. Yet most people in recovery have no structured way
                to assess where they are or plan where they&apos;re going.
              </p>
              <p className="text-[#4a5568] text-lg leading-relaxed">
                The Recovery Life Wellness Plan gives you a clear map of your
                journey — helping you recognize your strengths, identify areas
                of growth, and build the life you truly deserve in recovery.
              </p>
            </div>

            {/* Pull quote */}
            <div className="mt-10 pl-6 border-l-4 border-[#e8932a]">
              <p className="font-cormorant text-[#0d1b2e] text-xl italic leading-snug">
                &ldquo;Recovery capital predicts long-term recovery outcomes
                more reliably than treatment type alone.&rdquo;
              </p>
              <p className="text-[#6b7280] text-xs mt-2 tracking-widest uppercase">
                — Recovery Research Institute
              </p>
            </div>
          </motion.div>

          {/* Right: Pain → solution cards */}
          <div className="space-y-5">
            {points.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex gap-5 p-6 bg-white rounded-3xl shadow-sm border border-[#e8d5b0]/60 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-400"
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: item.color }}
                    />
                  </div>
                  <div>
                    <p className="text-[#0d1b2e] font-semibold text-sm mb-1.5">
                      {item.problem}
                    </p>
                    <p className="text-[#6b7280] text-sm leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
