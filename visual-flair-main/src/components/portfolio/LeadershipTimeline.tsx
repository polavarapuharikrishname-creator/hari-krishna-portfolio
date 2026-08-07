import { useEffect, useRef, useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { SmartImage } from "@/components/portfolio/SmartImage";
import type { LeadershipYear } from "@/lib/portfolio-data";

interface LeadershipTimelineProps {
  years: LeadershipYear[];
}

function TimelineNode({
  role,
  side,
  index,
}: {
  role: LeadershipYear["roles"][number];
  side: "left" | "right";
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const nodeId = `${role.org}-${role.role}`.replace(/\s+/g, "-");

  return (
    <div
      className={`timeline-node reveal ${side === "left" ? "md:pr-[calc(50%+2rem)] md:text-right" : "md:pl-[calc(50%+2rem)]"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <button
        type="button"
        id={`timeline-trigger-${nodeId}`}
        aria-expanded={open}
        aria-controls={`timeline-panel-${nodeId}`}
        onClick={() => setOpen((v) => !v)}
        className={`timeline-card group w-full rounded-2xl border border-ink/15 p-5 text-left transition duration-300 hover:border-ink md:max-w-md ${
          side === "left" ? "md:ml-auto" : "md:mr-auto"
        } ${open ? "border-ink bg-ink/5" : "bg-cream/60"}`}
      >
        <div className={`flex items-start justify-between gap-3 ${side === "left" ? "md:flex-row-reverse" : ""}`}>
          <div className={side === "left" ? "md:text-right" : ""}>
            <div className="flex items-center gap-2">
           {role.logo && (
            <img
              src={role.logo}
                alt={role.org}
                 className="h-20 w-20 object-contain shrink-0"
                   />
                 )}

  <div className="font-serif text-lg font-semibold tracking-wide text-foreground">
  {role.org}
</div>
</div>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <span className="text-lg font-bold">{role.role}</span>
              {role.promotion && (
                <span className="inline-flex items-center gap-1 rounded-full border border-ink/20 bg-accent/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em]">
                  <ArrowRight className="h-3 w-3" />
                  {role.promotion}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{role.summary}</p>
          </div>
          <ChevronDown
            className={`mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </div>

        <div
          id={`timeline-panel-${nodeId}`}
          role="region"
          aria-labelledby={`timeline-trigger-${nodeId}`}
          className={`grid transition-all duration-400 ease-out ${open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="overflow-hidden">
  <p
    className={`text-sm leading-relaxed ${
      side === "left" ? "md:text-right" : ""
    }`}
  >
    {role.detail}
  </p>

  {role.image && (
    <SmartImage
      src={role.image}
      alt={`${role.org} — ${role.role}`}
      aspect={role.aspect}
      fit={role.fit}
      wrapperClassName="!rounded-xl"
    />
  )}
</div>
</div>
</button>
    </div>
  );
}

export function LeadershipTimeline({ years }: LeadershipTimelineProps) {
  const spineRef = useRef<HTMLDivElement>(null);
  const [spineProgress, setSpineProgress] = useState(0);

  useEffect(() => {
    const spine = spineRef.current;
    if (!spine) return;

    const update = () => {
      const rect = spine.getBoundingClientRect();
      const viewport = window.innerHeight;
      const start = viewport * 0.15;
      const end = rect.height + rect.top - viewport * 0.5;
      const scrolled = window.scrollY + start - rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / Math.max(end, 1)));
      setSpineProgress(progress);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  let nodeIndex = 0;

  return (
    <div ref={spineRef} className="timeline relative mx-auto max-w-4xl">
      {/* spine */}
      <div
        className="timeline-spine absolute bottom-0 left-4 top-0 w-px bg-ink/15 md:left-1/2 md:-translate-x-px"
        aria-hidden
      >
        <div
          className="timeline-spine__fill absolute inset-x-0 top-0 bg-accent"
          style={{ height: `${spineProgress * 100}%`, transition: "height 0.3s ease-out" }}
        />
      </div>

      <div className="space-y-16 pl-10 md:pl-0">
        {years.map((yearBlock) => (
          <div key={yearBlock.year}>
            <div className="timeline-year reveal mb-8 flex items-center gap-4 md:justify-center">
              <div className="timeline-dot absolute left-4 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-ink bg-cream md:left-1/2" />
              <div className="rounded-full border border-ink/20 bg-cream px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em]">
                {yearBlock.year}
                <span className="ml-2 text-muted-foreground">· {yearBlock.label}</span>
              </div>
            </div>

            <div className="space-y-6">
              {yearBlock.roles.map((role, i) => {
                const side = nodeIndex % 2 === 0 ? "left" : "right";
                const current = nodeIndex;
                nodeIndex += 1;
                return (
                  <TimelineNode
                    key={`${yearBlock.year}-${role.org}-${i}`}
                    role={role}
                    side={side}
                    index={current}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
