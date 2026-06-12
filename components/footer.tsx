import { Heart } from "lucide-react";

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
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e8932a] to-[#c9a84c] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">RL</span>
              </div>
              <div>
                <span className="text-white font-cormorant font-semibold text-xl block leading-none">
                  Recovery Life Wellness Plan
                </span>
                <span className="text-white/30 text-[10px] tracking-widest uppercase">
                  recoverywellnessplan.app
                </span>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              A free, private wellness planning tool built to support the whole
              person on their journey to lasting recovery — body, mind, spirit,
              and community.
            </p>
            <div className="mt-6">
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
