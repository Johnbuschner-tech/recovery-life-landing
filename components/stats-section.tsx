"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: "8",
    label: "Dimensions of Wellness",
    desc: "A holistic, SAMHSA-based framework for whole-person recovery",
  },
  {
    value: "100%",
    label: "Free to Use",
    desc: "No hidden costs, no paywalls — recovery tools should be accessible",
  },
  {
    value: "24/7",
    label: "Always Available",
    desc: "Your wellness plan goes wherever your recovery takes you",
  },
  {
    value: "1",
    label: "Personalized Plan",
    desc: "Built by you, for you — no two recovery journeys are the same",
  },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#e8932a] py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center relative"
            >
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/20" />
              )}
              <div className="font-cormorant text-white font-bold leading-none mb-1.5 text-[clamp(2.5rem,5vw,4rem)]">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-white/70 text-xs leading-relaxed hidden md:block max-w-[160px] mx-auto">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
