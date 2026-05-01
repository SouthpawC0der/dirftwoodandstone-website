"use client";

import { useState, useEffect } from "react";

const taglines = [
  "Your home. Your life. Professionally managed.",
  "All the expertise, without the full-time commitment.",
];

interface RotatingTaglineProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function RotatingTagline({ className, style }: RotatingTaglineProps = {}) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % taglines.length);
        setVisible(true);
      }, 600);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const defaultClass = "text-white text-base sm:text-lg tracking-[0.15em] uppercase mb-10";
  const defaultStyle: React.CSSProperties = {
    fontFamily: "var(--font-josefin, sans-serif)",
    fontWeight: 700,
    textShadow: "0 1px 8px rgba(0,0,0,0.8), 0 2px 16px rgba(0,0,0,0.6)",
    minHeight: "1.6em",
  };

  return (
    <p
      className={`transition-opacity duration-500 ${className ?? defaultClass}`}
      style={{ ...defaultStyle, ...style, opacity: visible ? 1 : 0 }}
    >
      {taglines[current]}
    </p>
  );
}
