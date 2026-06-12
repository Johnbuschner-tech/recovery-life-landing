"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "Having all my wellness dimensions in one place finally helped me see exactly where I needed to focus — and where I was already doing better than I thought.",
    from: "Recovery Life Member",
  },
  {
    quote:
      "The Master Wellness Plan gave me something real and concrete to share with my counselor. Actual goals, actual progress — not just 'I'm trying.'",
    from: "Recovery Life Member",
  },
  {
    quote:
      "For the first time I could see my recovery capital clearly. I had way more strengths than I ever gave myself credit for.",
    from: "Recovery Life Member",
  },
];

export function QuoteSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-28 bg-gradient-to-br from-[#0d1b2e] via-[#12274a] to-[#0d1b2e] relative overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#e8932a]/8 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#3b82f6]/6 blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#e8932a] text-xs font-bold tracking-[0.2em] uppercase">
            The Truth About Recovery
          </span>

          {/* Large opening quote mark */}
          <div className="font-cormorant text-[#e8932a]/20 text-[160px] leading-none mt-2 mb-[-60px]">
            &ldquo;
          </div>

          <blockquote className="font-cormorant text-white leading-[1.2] italic text-[clamp(1.8rem,4vw,3.2rem)] max-w-4xl mx-auto">
            Recovery is not just about getting sober. It&apos;s about building a
            life so fulfilling, so rich in purpose and connection, that using is
            no longer the answer.
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-[#e8932a]/50" />
            <span className="text-[#e8932a]/70 text-xs tracking-[0.2em] uppercase font-semibold">
              The Foundation of Lasting Recovery
            </span>
            <div className="w-12 h-px bg-[#e8932a]/50" />
          </div>
        </motion.div>

        {/* Testimonial cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.3 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white/[0.05] border border-white/[0.09] rounded-2xl p-6 text-left hover:bg-white/[0.09] transition-colors duration-300"
            >
              <div className="text-[#e8932a]/50 font-cormorant text-4xl leading-none mb-3">
                &ldquo;
              </div>
              <p className="text-white/75 text-sm leading-relaxed italic mb-4">
                {t.quote}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#e8932a] to-[#c9a84c] flex items-center justify-center">
                  <span className="text-white text-[9px] font-bold">RL</span>
                </div>
                <p className="text-[#e8932a]/60 text-xs font-semibold tracking-wider uppercase">
                  {t.from}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
