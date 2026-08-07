import { useEffect, useRef, useState } from "react";

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  parallax?: boolean;
  onClick?: () => void;
  aspect?: string;
  fit?: "cover" | "contain";
}

export function SmartImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  parallax = false,
  onClick,
  aspect = "aspect-[4/3]",
  fit = "cover",
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const [offset, setOffset] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!parallax) return;
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      const progress = (rect.top + rect.height / 2 - winH / 2) / winH;
      setOffset(Math.max(-40, Math.min(40, -progress * 30)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [parallax]);

  return (
    <div
      ref={wrapRef}
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl glass-border ${aspect} ${
        onClick ? "cursor-zoom-in" : ""
      } group ${wrapperClassName}`}
    >
      {!loaded && <div className="absolute inset-0 img-skeleton" />}
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          style={{ transform: `translateY(${offset}px) scale(1.08)` }}
          className={`h-full w-full ${fit === "cover" ? "object-cover" : "object-contain"} transition-all duration-[900ms] ease-out group-hover:scale-[1.12] ${
            loaded ? "opacity-100 blur-0" : "opacity-0 blur-md"
          } ${className}`}
        />
      )}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 shadow-[inset_0_0_60px_oklch(0.75_0.18_260/0.4)]" />
      </div>
    </div>
  );
}
