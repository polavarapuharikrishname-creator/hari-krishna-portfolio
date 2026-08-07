import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { src: string; alt: string; caption?: string }[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}

export function Lightbox({ images, index, onClose, onIndex }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % images.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, images.length, onClose, onIndex]);

  const img = images[index];
  if (!img) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-xl animate-fade-up"
      onClick={onClose}
      style={{ animationDuration: "0.3s" }}
    >
      <button
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full border border-cream/20 p-2 text-cream transition hover:bg-cream/10"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onIndex((index - 1 + images.length) % images.length);
            }}
            className="absolute left-6 rounded-full border border-cream/20 p-3 text-cream transition hover:bg-cream/10"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onIndex((index + 1) % images.length);
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full border border-cream/20 p-3 text-cream transition hover:bg-cream/10"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
      <div
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-[0_0_120px_oklch(0.75_0.18_260/0.4)]"
        />
        {img.caption && (
          <p className="mt-3 text-center font-mono text-xs uppercase tracking-widest text-cream/70">
            {img.caption} · {index + 1} / {images.length}
          </p>
        )}
      </div>
    </div>
  );
}
