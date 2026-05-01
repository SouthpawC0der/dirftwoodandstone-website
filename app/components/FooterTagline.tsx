"use client";

import { usePathname } from "next/navigation";

export default function FooterTagline() {
  const pathname = usePathname();
  const tagline =
    pathname === "/about" || pathname === "/contact"
      ? "Your home. Your life. Professionally managed."
      : "All the expertise, without the full-time commitment.";

  return (
    <p
      className="text-sm text-white leading-relaxed max-w-xs"
      style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 300 }}
    >
      {tagline}
    </p>
  );
}
