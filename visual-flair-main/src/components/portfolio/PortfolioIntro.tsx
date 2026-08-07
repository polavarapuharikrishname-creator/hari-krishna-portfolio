import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { INTRO } from "@/lib/portfolio-data";

const STEPS = [150, 550, 850, 1050, 1250, 1500, 1750, 1950, 2150, 2450];

const COLORS = {
  ink: "#241E17",
  inkMid: "#574A38",
  inkSoft: "#7A6B54",
  rule: "#CDBB9E",
  stamp: "#8B4A2B",
  moss: "#56663F",
  card: "#EFE2CB",
};

type PortfolioIntroProps = {
  onEnter: () => void;
};

export function PortfolioIntro({ onEnter }: PortfolioIntroProps) {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    if (reduced) {
      setStep(STEPS.length);
      return;
    }
    setStep(0);
    const timers = STEPS.map((t, i) => setTimeout(() => setStep(i + 1), t));
    return () => timers.forEach(clearTimeout);
  }, [replayKey, reduced]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const in_ = (n: number) => step >= n;
  const replay = () => setReplayKey((k) => k + 1);

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-6 py-16 relative overflow-hidden select-none"
      style={{
        background: "radial-gradient(120% 100% at 50% 20%, #241E19 0%, #150F0C 70%)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500&display=swap');

        .pi-serif { font-family: 'Fraunces', ui-serif, Georgia, serif; }
        .pi-mono  { font-family: 'IBM Plex Mono', ui-monospace, monospace; letter-spacing: 0.05em; }
        .pi-sans  { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }

        .pi-reveal {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .pi-reveal.pi-in { opacity: 1; transform: translateY(0); }

        .pi-card-reveal {
          opacity: 0;
          transform: translateY(20px) scale(0.98);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }
        .pi-card-reveal.pi-in { opacity: 1; transform: translateY(0) scale(1); }

        .pi-stamp-reveal {
          opacity: 0;
          transform: rotate(-14deg) scale(0.85);
          transition: opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.34,1.56,0.64,1);
        }
        .pi-stamp-reveal.pi-in { opacity: 1; transform: rotate(-8deg) scale(1); }

        .pi-rule {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.6s cubic-bezier(0.65,0,0.35,1);
        }
        .pi-rule.pi-in { transform: scaleX(1); }

        .pi-dot { animation: pi-pulse 2.2s ease-in-out infinite; }
        @keyframes pi-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(86,102,63,0.45); }
          50% { box-shadow: 0 0 0 5px rgba(86,102,63,0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .pi-reveal, .pi-card-reveal, .pi-stamp-reveal, .pi-rule { transition: none !important; }
          .pi-dot { animation: none !important; }
        }
      `}</style>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.05,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div
        className={`pi-card-reveal ${in_(1) ? "pi-in" : ""} relative w-full max-w-md rounded-2xl px-7 py-8 sm:px-9 sm:py-10 shadow-2xl`}
        style={{ backgroundColor: COLORS.card }}
      >
        <div className="flex items-start justify-between mb-7">
          <div
            className={`pi-reveal ${in_(2) ? "pi-in" : ""} pi-mono text-xs flex items-center gap-2`}
            style={{ color: COLORS.moss }}
          >
            <span
              className="pi-dot inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: COLORS.moss }}
            />
            AVAILABLE FOR WORK
          </div>
          <div
            className={`pi-stamp-reveal ${in_(2) ? "pi-in" : ""} pi-mono text-xs px-3 py-1 rounded border-2 shrink-0`}
            style={{ borderColor: COLORS.stamp, color: COLORS.stamp }}
          >
            CASE NO. {INTRO.caseNo}
          </div>
        </div>

        <div className={`pi-reveal ${in_(3) ? "pi-in" : ""} flex items-center gap-4 mb-2`}>
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center pi-serif text-lg shrink-0"
            style={{ backgroundColor: COLORS.ink, color: COLORS.card }}
          >
            {INTRO.initials}
          </div>
          <h1 className="pi-serif text-3xl sm:text-4xl" style={{ color: COLORS.ink }}>
            {INTRO.name}
          </h1>
        </div>

        <p className={`pi-reveal ${in_(4) ? "pi-in" : ""} pi-sans text-lg mb-2`} style={{ color: COLORS.inkMid }}>
          {INTRO.title}
        </p>

        <p className={`pi-reveal ${in_(5) ? "pi-in" : ""} pi-mono text-xs mb-6`} style={{ color: COLORS.inkSoft }}>
          {INTRO.location}
        </p>

        <div className={`pi-rule ${in_(6) ? "pi-in" : ""} h-px w-full mb-6`} style={{ backgroundColor: COLORS.rule }} />

        <div className="space-y-3 mb-8">
          {INTRO.log.map((item, i) => (
            <div key={item.n} className={`pi-reveal ${in_(7 + i) ? "pi-in" : ""} flex gap-3 items-baseline`}>
              <span className="pi-mono text-xs shrink-0" style={{ color: COLORS.stamp }}>
                {item.n}
              </span>
              <span className="pi-sans text-sm" style={{ color: COLORS.ink }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <div className={`pi-reveal ${in_(10) ? "pi-in" : ""} flex items-center justify-between`}>
          <button
            type="button"
            onClick={replay}
            className="pi-sans text-xs cursor-pointer"
            style={{ color: COLORS.inkSoft, textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            Replay intro
          </button>
          <button
            type="button"
            onClick={onEnter}
            className="pi-sans text-sm font-medium px-5 py-2.5 rounded-full flex items-center gap-2 cursor-pointer transition hover:opacity-90"
            style={{ backgroundColor: COLORS.ink, color: COLORS.card }}
          >
            Enter site <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
