"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Activity,
  Heart,
  Star,
  DollarSign,
  Briefcase,
  FileText,
  Globe,
  Users,
} from "lucide-react";

const dimensions = [
  {
    icon: Activity,
    name: "Physical",
    tagline: "Body & Health",
    description:
      "Exercise, nutrition, sleep, and medical care form the foundation of physical wellness in recovery.",
    color: "#e8932a",
    bg: "#fef3e2",
  },
  {
    icon: Heart,
    name: "Emotional",
    tagline: "Feelings & Coping",
    description:
      "Building emotional intelligence, processing feelings, and developing healthy coping strategies.",
    color: "#e85555",
    bg: "#fef2f2",
  },
  {
    icon: Star,
    name: "Spiritual",
    tagline: "Values & Purpose",
    description:
      "Connecting with your values, sense of purpose, and meaning — whatever that looks like for you.",
    color: "#8b5cf6",
    bg: "#f5f3ff",
  },
  {
    icon: DollarSign,
    name: "Financial",
    tagline: "Stability & Growth",
    description:
      "Rebuilding financial stability, budgeting skills, and working toward economic independence.",
    color: "#10b981",
    bg: "#ecfdf5",
  },
  {
    icon: Briefcase,
    name: "Occupational",
    tagline: "Work & Purpose",
    description:
      "Finding purpose through work, career development, volunteering, or meaningful daily activity.",
    color: "#3b82f6",
    bg: "#eff6ff",
  },
  {
    icon: FileText,
    name: "Intellectual",
    tagline: "Mind & Learning",
    description:
      "Stimulating your mind through learning, creativity, problem-solving, and personal growth.",
    color: "#f59e0b",
    bg: "#fffbeb",
  },
  {
    icon: Globe,
    name: "Environmental",
    tagline: "Space & Safety",
    description:
      "Creating safe, supportive living spaces that promote healing and reduce exposure to triggers.",
    color: "#14b8a6",
    bg: "#f0fdfa",
  },
  {
    icon: Users,
    name: "Social",
    tagline: "Relationships & Community",
    description:
      "Building healthy relationships, community connections, and a strong, lasting support network.",
    color: "#ec4899",
    bg: "#fdf2f8",
  },
];

export function DimensionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="dimensions" ref={ref} className="py-28 bg-[#0d1b2e] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full bg-[#e8932a]/5 blur-[80px]" />
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full bg-[#3b82f6]/5 blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[#e8932a] text-xs font-bold tracking-[0.2em] uppercase">
            The Framework
          </span>
          <h2 className="font-cormorant text-white mt-4 leading-tight text-[clamp(2.2rem,4.5vw,4rem)]">
            8 Dimensions of Wellness
          </h2>
          <p className="text-white/55 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
            SAMHSA&apos;s evidence-based framework recognizes that lasting
            recovery requires balance across all areas of life. Strength in each
            dimension reinforces the others.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dimensions.map((dim, i) => {
            const Icon = dim.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 45 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.65,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] hover:border-white/[0.18] rounded-2xl p-5 cursor-default transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: dim.color }}
                />

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${dim.color}22` }}
                >
                  <Icon className="w-5 h-5" style={{ color: dim.color }} />
                </div>

                <div
                  className="text-[10px] font-semibold tracking-widest uppercase mb-1"
                  style={{ color: dim.color }}
                >
                  {dim.tagline}
                </div>
                <h3 className="text-white font-semibold text-base mb-2">
                  {dim.name}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed group-hover:text-white/65 transition-colors duration-300">
                  {dim.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://recoverywellnessplan.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e8932a] hover:bg-[#d4831e] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#e8932a]/30 hover:shadow-xl hover:-translate-y-0.5"
          >
            Track All 8 Dimensions — Free
          </a>
        </motion.div>
      </div>
    </section>
  );
}
