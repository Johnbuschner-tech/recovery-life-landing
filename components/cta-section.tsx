"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Shield, Heart, Star } from "lucide-react";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 bg-[#fdf8f0] relative overflow-hidden">
      {/* Warm background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#e8932a]/8 blur-[100px]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-[#e8932a]/12 border border-[#e8932a]/25 rounded-full px-5 py-2 text-[#e8932a] text-xs font-bold tracking-widest uppercase mb-8">
            <Star className="w-3.5 h-3.5" />
            Free for Everyone in Recovery
          </div>

          <h2 className="font-cormorant text-[#0d1b2e] leading-tight text-[clamp(2.5rem,5.5vw,5rem)]">
            Your journey deserves{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8932a] to-[#c9a84c] italic">
              a real plan.
            </span>
          </h2>

          <p className="text-[#4a5568] mt-7 text-xl leading-relaxed max-w-2xl mx-auto">
            Join others who are taking control of their recovery by building a
            personalized, holistic wellness plan — completely free, completely
            yours.
          </p>

          <div className="mt-10">
            <a
              href="https://recoverywellnessplan.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#e8932a] to-[#d4831e] hover:from-[#f09d38] hover:to-[#e8932a] text-white font-bold px-12 py-5 rounded-full text-lg transition-all duration-300 shadow-[0_20px_60px_rgba(232,147,42,0.4)] hover:shadow-[0_20px_80px_rgba(232,147,42,0.6)] hover:-translate-y-1"
            >
              Start Your Free Plan Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 mt-8 text-[#9ca3af] text-sm flex-wrap">
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#e8932a]" />
              Private & Secure
            </div>
            <div className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-[#e8932a]" />
              No Credit Card
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-[#e8932a]" />
              Free Forever
            </div>
          </div>
        </motion.div>

        {/* Professional support callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-16 p-7 bg-white rounded-3xl border border-[#e8d5b0] shadow-sm max-w-2xl mx-auto"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#e8932a] to-[#c9a84c] flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="text-white font-bold text-sm">RL</span>
            </div>
            <div className="text-left">
              <p className="text-[#0d1b2e] font-semibold mb-1">
                Need professional support too?
              </p>
              <p className="text-[#6b7280] text-sm leading-relaxed">
                Recovery Life Collective offers 24/7 free consultation, professional intervention services, and expert insurance navigation across New Jersey and eastern Pennsylvania.{" "}
                <a
                  href="https://recoverylifecollective.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e8932a] hover:text-[#d4831e] font-semibold hover:underline"
                >
                  Visit recoverylifecollective.com →
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
