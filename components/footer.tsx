import { Heart } from "lucide-react";
import Image from "next/image";

const LOGO_URL =
  "https://galaxy-prod.tlcdn.com/view/user_35cxGzZba9uxfzJ3oAxqL0bs4ND/643860b9e53b4e3481798c127658f967.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const appLinks = [
    "Daily Check-In Tracker",
    "8 Dimensions Wellness Planner",
    "Recovery Capital Builder",
    "Master Wellness Plan",
  ];

  return (
    <footer className="bg-[#080f1c] py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-start gap-4 mb-5">
              {/* Logo with white background to ensure text is fully visible */}
              <div className="bg-white rounded-xl p-2 shadow-lg flex-shrink-0">
                <Image
                  src={LOGO_URL}
                  alt="Recovery Life Collective"
                  width={110}
                  height={110}
                  className="rounded-lg object-contain"
                />
              </div>
              <div className="pt-1">
                <span className="text-white/30 text-[10px] tracking-widest uppercase block mb-1">
                  recoverywellnessplan.app
                </span>
                <p className="text-white/45 text-sm leading-relaxed max-w-xs">
                  A free, private wellness planning tool built to support the
                  whole person on their journey to lasting recovery — body,
                  mind, spirit, and community.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="https://recoverywellnessplan.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#e8932a] hover:bg-[#d4831e] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                Open App — Free
              </a>
            </div>
          </div>

          {/* App Features */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs tracking-[0.15em] uppercase">
              App Features
            </h4>
            <ul className="space-y-3">
              {appLinks.map((link) => (
                <li key={link}>
                  <span className="text-white/40 text-sm hover:text-white/70 transition-colors cursor-default">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs tracking-[0.15em] uppercase">
              Recovery Life Collective
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://recoverylifecollective.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-[#e8932a] transition-colors"
                >
                  recoverylifecollective.com
                </a>
              </li>
              <li>
                <a
                  href="https://recoverywellnessplan.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-[#e8932a] transition-colors"
                >
                  recoverywellnessplan.app
                </a>
              </li>
              <li>
                <a
                  href="tel:9144008108"
                  className="text-white/40 hover:text-[#e8932a] transition-colors"
                >
                  914-400-8108
                </a>
              </li>
              <li>
                <a
                  href="mailto:John@recoverylifecollective.com"
                  className="text-white/40 hover:text-[#e8932a] transition-colors break-all"
                >
                  John@recoverylifecollective.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {currentYear} Recovery Life Collective LLC. All rights reserved.
          </p>
          <p className="text-white/25 text-xs flex items-center gap-1.5">
            Made with{" "}
            <Heart className="w-3 h-3 text-[#e8932a]" fill="#e8932a" /> for
            those on the road to recovery
          </p>
        </div>
      </div>
    </footer>
  );
}
