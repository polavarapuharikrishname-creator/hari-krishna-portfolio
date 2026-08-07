import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HeroPortraitProps {
  src: string;
  alt: string;
  tiltX?: number;
  tiltY?: number;
  onReady?: () => void;
}

export function HeroPortrait({
  src,
  alt,
  tiltX = 0,
  tiltY = 0,
  onReady,
}: HeroPortraitProps) {
  const reducedMotion = useReducedMotion();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
      onReady?.();
    };
  }, [src, onReady]);

  const tiltStyle = reducedMotion
    ? undefined
    : {
        transform: `perspective(900px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`,
      };

  return (
    <div
      className={`hero-portrait relative mx-auto w-full max-w-[500px] ${
        reducedMotion ? "hero-portrait--static" : "hero-portrait--animated"
      } ${loaded ? "hero-portrait--ready" : ""}`}
    >
      <div
        className="hero-portrait__tilt relative w-full"
        style={tiltStyle}
      >
        <div className="hero-portrait__reveal relative w-full overflow-visible">
          <div className="hero-portrait__breathe relative w-full">
            <img
              src={src}
              alt={alt}
              loading="eager"
              decoding="async"
              className="hero-portrait__img h-auto w-full object-contain"
            />
          </div>

          <div
            className="hero-portrait__grain pointer-events-none absolute inset-0"
            aria-hidden
          />
          <div
            className="hero-portrait__vignette pointer-events-none absolute inset-0"
            aria-hidden
          />
        </div>
      </div>

      {!loaded && <div className="absolute inset-0 min-h-[520px] img-skeleton" />}
    </div>
  );
}
