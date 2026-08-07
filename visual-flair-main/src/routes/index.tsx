import { useMemo, useState, useEffect, useRef, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  MapPin,
  Circle,
  Menu,
  X,
  Sparkles,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Download,
  ChevronDown,
} from "lucide-react";
import { SmartImage } from "@/components/portfolio/SmartImage";
import { HeroPortrait } from "@/components/portfolio/HeroPortrait";
import { Lightbox } from "@/components/portfolio/Lightbox";
import { PortfolioIntro } from "@/components/portfolio/PortfolioIntro";
import { LeadershipTimeline } from "@/components/portfolio/LeadershipTimeline";
import { useReveal } from "@/hooks/useReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  IMG,
  ABOUT,
  LEADERSHIP,
  PROJECTS,
  EXPERIENCE,
  ACHIEVEMENTS,
  CERTIFICATIONS,
  GALLERY,
  CONTACT,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
head: () => ({
  meta: [
    { title: "Polavarapu Hari Krishna — Engineer" },
    {
      name: "description",
      content:
        "Portfolio of Polavarapu Hari Krishna — Mechanical Engineering student, NEC President, and campus leader at ANITS, Visakhapatnam.",
    },
    { property: "og:title", content: "Polavarapu Hari Krishna — Engineer" },
    { property: "og:description", content: "Portfolio, projects, gallery." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  links: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
}),
  component: Portfolio,
});

type Shot = { src: string; alt: string; caption?: string };

const NAV_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#leadership", label: "Leadership" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#certifications", label: "Certifications" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
] as const;

function Portfolio() {
  useReveal();
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const [portraitTilt, setPortraitTilt] = useState({ x: 0, y: 0 });
  const [heroPortraitReady, setHeroPortraitReady] = useState(false);
  const [lb, setLb] = useState<{ shots: Shot[]; i: number } | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem("intro-dismissed") === "true") {
      setShowIntro(false);
    }
  }, []);

  const dismissIntro = useCallback(() => {
    sessionStorage.setItem("intro-dismissed", "true");
    setShowIntro(false);
  }, []);

  const handleHeroPortraitReady = useCallback(() => setHeroPortraitReady(true), []);

  const handleHeroMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (reducedMotion || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setPortraitTilt({ x: x * 10, y: -y * 10 });
    },
    [reducedMotion],
  );

  const handleHeroMouseLeave = useCallback(() => {
    setPortraitTilt({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const galleryTags = useMemo(
    () => ["All", ...Array.from(new Set(GALLERY.map((g) => g.tag)))],
    [],
  );
  const filteredGallery = useMemo(
    () => (filter === "All" ? GALLERY : GALLERY.filter((g) => g.tag === filter)),
    [filter],
  );

  const open = (shots: Shot[], i = 0) => setLb({ shots, i });

  return (
    <>
      {showIntro && (
        <div className="fixed inset-0 z-[100]">
          <PortfolioIntro onEnter={dismissIntro} />
        </div>
      )}
      <div className="min-h-screen text-ink">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-[1600px] items-start justify-between px-6 py-6 md:px-10">
          <a href="#top" className="flex items-center gap-3">
            <div className="corner-frame flex h-10 w-10 items-center justify-center bg-ink text-cream">
              <span className="font-mono text-sm font-bold">HP</span>
            </div>
            <div className="hidden font-mono text-[10px] uppercase leading-tight tracking-[0.18em] sm:block">
              Hari Krishna<br />Polavarapu
            </div>
          </a>
          <nav className="hidden items-start gap-16 pt-1 font-mono text-[11px] uppercase tracking-[0.18em] md:flex">

            <div>
              <div className="font-bold">Currently</div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Circle className="h-2 w-2 animate-soft-pulse fill-emerald-500 stroke-none" />
                Available for work
              </div>
            </div>
          </nav>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            className="corner-frame flex cursor-pointer items-center gap-2 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] transition hover:bg-ink hover:text-cream"
          >
            {menuOpen ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <nav
            id="site-menu"
            aria-label="Site"
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-ink/15 bg-cream px-8 pb-10 pt-28 shadow-2xl md:px-10"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </p>
            <ul className="mt-8 flex flex-col gap-1">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-ink/10 py-4 font-mono text-sm uppercase tracking-[0.16em] transition hover:pl-2 hover:text-muted-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto space-y-2 border-t border-ink/10 pt-8 font-mono text-[11px] uppercase tracking-[0.18em]">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Circle className="h-2 w-2 animate-soft-pulse fill-emerald-500 stroke-none" />
                Available for work
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* HERO */}
      <section
        id="top"
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className={`relative min-h-screen overflow-hidden pt-28 ${
          heroPortraitReady || reducedMotion ? "hero-ready" : ""
        }`}
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-6 pb-16 md:grid-cols-12 md:px-10">
          <div className="md:col-span-6 md:pt-16">
            <p className="hero-text-reveal hero-text-reveal--1 font-mono text-xs font-bold uppercase tracking-[0.2em]">
              Engineer
            </p>
            <p className="hero-text-reveal hero-text-reveal--2 mt-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              I believe great ideas deserve great execution.
            </p>

            <h1 className="hero-text-reveal hero-text-reveal--3 mt-20 text-[clamp(2.25rem,6.5vw,6.5rem)] font-black leading-[0.9] tracking-tight">
              <span className="opacity-40">HARI KRISHNA</span>
              <br />
              <span>POLAVARAPU</span>
            </h1>

            <p className="reveal mt-10 max-w-md text-lg leading-relaxed text-muted-foreground">
              I'm Hari Krishna, a Mechanical Engineering student with a strong
              passion for leadership, business, and management. While my
              academic journey is rooted in engineering, my experiences have led
              me toward building teams, creating opportunities, and driving
              impactful initiatives. I enjoy solving problems, connecting with
              people, and taking on challenges that combine strategy,
              collaboration, and innovation. I'm constantly learning, growing,
              and striving to make a meaningful impact wherever I contribute.
            </p>

            <div className="reveal mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-cream transition hover:shadow-[0_10px_40px_oklch(0.22_0.09_265/0.4)]"
              >
                See selected work
                <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-5 py-3 text-sm font-medium transition hover:bg-ink hover:text-cream"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="relative md:col-span-6">
            {/* soft glow */}
            <div className="pointer-events-none absolute -inset-10 -z-10">
              <div
                className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-soft-pulse"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.75 0.18 260 / 0.55), transparent 65%)",
                }}
              />
            </div>
            <HeroPortrait
              src={IMG.hero}
              alt="Hari Krishna Polavarapu portrait"
              tiltX={portraitTilt.x}
              tiltY={portraitTilt.y}
              onReady={handleHeroPortraitReady}
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll ↓
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" kicker="01 · About" title="Engineering student. Campus leader. Builder.">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[2fr_3fr]">
          <div className="reveal">
            <SmartImage src={IMG.aboutProfile} alt="Polavarapu Hari Krishna" aspect="aspect-[3/4]" parallax />
          </div>
          <div className="reveal space-y-6">
            {ABOUT.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="font-mono text-[11px] uppercase tracking-[0.18em]">
              <span className="text-muted-foreground">CGPA — </span>
              <span className="font-bold">{ABOUT.academicRecord[ABOUT.academicRecord.length - 1].cgpa}</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {ABOUT.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-ink/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* LEADERSHIP */}
      <Section id="leadership" kicker="02 · Leadership" title="Roles across three years.">
        <LeadershipTimeline years={LEADERSHIP} />
      </Section>

      {/* PROJECTS */}
      <Section id="projects" kicker="03 · Projects" title="Tangible technical work.">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className="reveal rounded-3xl glass-border glow-hover overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <SmartImage
                src={p.thumb}
                alt={p.title}
                aspect="aspect-[16/10]"
                wrapperClassName="!rounded-none !border-0"
                parallax
              />
              <div className="p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {p.year}
                </div>
                <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                <div
                  className={`grid transition-all duration-400 ease-out ${
                    expandedProject === i ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-ink/15 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setExpandedProject(expandedProject === i ? null : i)}
                  className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] transition hover:text-muted-foreground"
                >
                  {expandedProject === i ? "Hide details" : "View details"}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${expandedProject === i ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" kicker="04 · Experience" title="Internships, chronologically.">
        <div className="space-y-6">
          {EXPERIENCE.map((e, i) => (
            <div
              key={e.org}
              className="reveal rounded-2xl border border-ink/15 p-6 transition hover:border-ink hover:bg-ink/5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full glass-border">
                  <SmartImage
                    src={e.logo}
                    alt={e.org}
                    aspect="aspect-square"
                    wrapperClassName="!rounded-full !border-0 h-full w-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-bold">{e.org}</h3>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {e.year}
                    </span>
                  </div>
                  <p className="mt-1 text-muted-foreground">{e.role}</p>
                  <p className="mt-3 text-sm leading-relaxed">{e.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-ink/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ACHIEVEMENTS */}
      <Section id="achievements" kicker="05 · Achievements" title="Standout wins.">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => (
            <div
              key={a.stat}
              className="reveal rounded-3xl border border-ink/15 p-8 text-center transition hover:border-accent hover:shadow-[0_0_40px_oklch(0.75_0.18_260/0.25)]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-4xl font-black text-accent md:text-5xl">{a.stat}</div>
              <p className="mt-3 font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
                {a.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section id="certifications" kicker="06 · Certifications" title="Learning, on paper.">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => (
            <div
              key={c.title}
              className="reveal group cursor-zoom-in rounded-2xl glass-border p-3 glow-hover"
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() =>
                open(
                  CERTIFICATIONS.map((x) => ({
                    src: x.img,
                    alt: x.title,
                    caption: `${x.title} · ${x.issuer}`,
                  })),
                  i,
                )
              }
            >
              <SmartImage src={c.img} alt={c.title} aspect="aspect-[4/3]" wrapperClassName="!border-0" />
              <div className="p-3">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span>{c.date}</span>
                  <Sparkles className="h-3 w-3" />
                </div>
                <div className="mt-2 font-bold leading-tight">{c.title}</div>
                <div className="text-sm text-muted-foreground">{c.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

     {/* GALLERY */}
<Section id="gallery" kicker="07 · Gallery" title="Frames from the journey.">
  <div className="reveal mb-8 flex flex-wrap gap-2">
    {galleryTags.map((t) => (
      <button
        key={t}
        onClick={() => setFilter(t)}
        className={`rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] transition ${
          filter === t
            ? "border-ink bg-ink text-cream"
            : "border-ink/25 hover:border-ink"
        }`}
      >
        {t}
      </button>
    ))}
  </div>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {filteredGallery.map((g, i) => (
      <div key={g.src + i} className="reveal">
        <SmartImage
          src={g.src}
          alt={g.alt}
          aspect="aspect-[4/5]"
          parallax
          onClick={() =>
            open(
              (g.images ?? [g.src]).map((src) => ({
                src,
                alt: g.alt,
                caption: `${g.tag}${g.year ? ` · ${g.year}` : ""}`,
              })),
              0,
            )
          }
        />

        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          {g.tag}{g.year ? ` · ${g.year}` : ""}
        </p>
      </div>
    ))}
  </div>
</Section>

      {/* CONTACT */}
      <Section id="contact" kicker="08 · Contact" title={CONTACT.heading}>
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xl leading-relaxed text-muted-foreground">{CONTACT.subline}</p>

          <a
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`}
  target="_blank"
  rel="noopener noreferrer"
  className="group mt-10 inline-flex items-center gap-3 border-y border-ink/20 py-6 text-xl font-medium transition hover:text-muted-foreground"
>
  <Mail className="h-5 w-5" />
  {CONTACT.email}
  <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-45" />
</a>

          <div className="mt-8 flex justify-center gap-3">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-ink/25 p-3 transition hover:bg-ink hover:text-cream"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
  href={CONTACT.instagram}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
  className="rounded-full border border-ink/25 p-3 transition hover:bg-ink hover:text-cream"
>
  <Instagram className="h-4 w-4" />
</a>
          </div>

          <a
            href={CONTACT.resumeUrl}
            download
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition hover:shadow-[0_10px_40px_oklch(0.22_0.09_265/0.4)]"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>

          <div className="mt-8 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            {CONTACT.location}
          </div>
        </div>
      </Section>

      <footer className="border-t border-ink/15">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-4 px-6 py-10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:flex-row md:px-10">
          <div>© 2026 Polavarapu Hari Krishna. Made with care.</div>
          <div>ANITS · Visakhapatnam</div>
        </div>
      </footer>

      {lb && (
        <Lightbox
          images={lb.shots}
          index={lb.i}
          onClose={() => setLb(null)}
          onIndex={(i) => setLb((s) => (s ? { ...s, i } : s))}
        />
      )}
    </div>
    </>
  );
}

function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="reveal mb-14 flex items-end justify-between gap-8">
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            {title}
          </h2>
          <div className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:block">
            {kicker}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
