"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Activity, BarChart3, FileText, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Activity,
    number: "01",
    title: "Daily Check-In Tracker",
    description:
      "Start each day with intention. Log your wellness check-in, celebrate your sobriety milestone, and build awareness of your progress over time.",
    highlights: [
      "Sobriety day counter & milestones",
      "Daily wellness reflection prompts",
      "Visual progress over time",
    ],
    color: "#e8932a",
    badge: "Most Used",
  },
  {
    icon: BarChart3,
    number: "02",
    title: "8 Dimensions Wellness Planner",
    description:
      "Set meaningful goals and track concrete action steps across all 8 dimensions. Build habits gradually and watch your whole-person wellness score grow.",
    highlights: [
      "Personalized action plans per dimension",
      "Habit-to-routine tracking system",
      "Visual wellness score dashboard",
    ],
    color: "#c9a84c",
    badge: "Core Feature",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Recovery Capital Builder",
    description:
      "Identify and grow the internal strengths and external resources that sustain your recovery — from personal values to community connections.",
    highlights: [
      "Personal strengths & assets inventory",
      "Community & support resource mapping",
      "Capital growth tracking over time",
    ],
    color: "#3b82f6",
    badge: "Powerful",
  },
  {
    icon: FileText,
    number: "04",
    title: "Master Wellness Plan",
    description:
      "Your complete recovery roadmap in one unified view. See everything — goals, action steps, recovery capital, and notes — and share it with your support team.",
    highlights: [
      "All-in-one aggregated plan view",
      "Editable notes per dimension",
      "Shareable with counselors & sponsors",
    ],
    color: "#10b981",
    badge: "Comprehensive",
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" ref={ref} className="py-28 bg-[#fdf8f0] relative">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0d1b2e 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[#e8932a] text-xs font-bold tracking-[0.2em] uppercase">
            What You Get
          </span>
          <h2 className="font-cormorant text-[#0d1b2e] mt-4 leading-tight text-[clamp(2.2rem,4.5vw,4rem)]">
            Everything you need to thrive
          </h2>
          <p className="text-[#4a5568] mt-5 max-w-2xl mx-auto text-lg">
            Purpose-built tools for long-term recovery, designed by professionals
            who understand the journey from every angle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 45 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-white rounded-3xl p-8 border border-[#e8d5b0]/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                {/* Background number watermark */}
                <div
                  className="absolute top-4 right-6 font-cormorant font-bold text-[80px] leading-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity"
                  style={{ color: feature.color }}
                >
                  {feature.number}
                </div>

                {/* Left accent border */}
                <div
                  className="absolute left-0 top-8 bottom-8 w-1 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: feature.color }}
                />

                <div className="relative flex items-start gap-5">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: feature.color }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-cormorant text-[#0d1b2e] font-semibold text-xl leading-tight">
                        {feature.title}
                      </h3>
                      <span
                        className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: `${feature.color}15`,
                          color: feature.color,
                        }}
                      >
                        {feature.badge}
                      </span>
                    </div>
                    <p className="text-[#6b7280] text-sm leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <CheckCircle
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                            style={{ color: feature.color }}
                          />
                          <span className="text-[#374151]">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
