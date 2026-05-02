"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface VideoHeroProps {
  /** Path or URL to the drone/hero video. Replace with your actual footage. */
  videoSrc?: string;
  /** Static image used as background instead of video */
  imageSrc?: string;
  /** Poster image shown before video loads */
  posterSrc?: string;
  contentClassName?: string;
  children?: React.ReactNode;
}

export default function VideoHero({ videoSrc, imageSrc, posterSrc, contentClassName, children }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {
      // Autoplay blocked — video remains paused, poster/fallback shows
    });
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-charcoal">
      {/* Static image background */}
      {imageSrc && (
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />
      )}

      {/* Mobile fallback — static poster shown on small screens */}
      {videoSrc && (
        <div
          className="md:hidden absolute inset-0 w-full h-full bg-cover bg-bottom"
          style={{ backgroundImage: `url(${posterSrc ?? "/images/sky-poster.jpg"})` }}
          aria-hidden="true"
        />
      )}

      {/* Video background — hidden on mobile */}
      {videoSrc && (
        <video
          ref={videoRef}
          className={`hidden md:block absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc ?? "/images/sky-poster.jpg"}
          onCanPlay={() => setVideoLoaded(true)}
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Gradient fallback shown when no video or image or while loading */}
      {(!videoSrc && !imageSrc) && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(168, 123, 82, 0.18) 0%, transparent 55%),
              radial-gradient(ellipse at 80% 20%, rgba(196, 165, 123, 0.12) 0%, transparent 50%),
              linear-gradient(165deg, #1a1814 0%, #0e0d0b 40%, #1c1a15 70%, #141210 100%)
            `,
          }}
          aria-hidden="true"
        />
      )}

      {/* Dark overlay for text legibility */}
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 bg-charcoal/5" aria-hidden="true" />

      {/* Content */}
      <div className={`relative z-10 flex flex-col items-center h-full text-center px-6 ${contentClassName ?? "justify-end pb-32"}`}>
        {children}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
        <span
          className="text-[9px] tracking-[0.4em] uppercase text-stone-300"
          style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 300 }}
        >
          Scroll
        </span>
        <div className="w-px h-10 bg-driftwood-400 animate-pulse" />
      </div>
    </section>
  );
}
