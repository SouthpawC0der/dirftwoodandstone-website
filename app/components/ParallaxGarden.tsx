"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

export default function ParallaxGarden() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imgWrap = imgWrapRef.current;
    if (!section || !imgWrap) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;

      // How far the section has travelled through the viewport (0 = entering bottom, 1 = leaving top)
      const progress = 1 - rect.bottom / (viewH + rect.height);

      // Shift the image dramatically as you scroll
      const shift = (progress - 0.5) * viewH * 0.6;
      imgWrap.style.transform = `translateY(${shift}px)`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[65vh] lg:h-[80vh] overflow-hidden"
    >
      {/* Image wrapper — taller than the container so parallax has room to move */}
      <div
        ref={imgWrapRef}
        className="absolute inset-x-0 will-change-transform"
        style={{ top: "-40%", bottom: "-40%" }}
      >
        <Image
          src="/images/home18.png"
          alt="California estate garden"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Overlay + text */}
      <div className="absolute inset-0 bg-charcoal/40 flex flex-col items-center justify-center text-center px-6 z-10">
        <p
          className="text-cream text-[10px] tracking-[0.5em] uppercase mb-4"
          style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 700 }}
        >
          The Standard We Hold
        </p>
        <p
          className="text-cream text-2xl sm:text-3xl lg:text-4xl max-w-2xl text-balance font-semibold tracking-wide"
          style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 600 }}
        >
          Care in Every Area of Your Property
        </p>
      </div>
    </section>
  );
}
