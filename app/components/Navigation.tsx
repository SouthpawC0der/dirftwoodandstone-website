"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "What We Provide" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const past = window.scrollY > 60;
      setScrolled(past);
      setPastHero(past);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navBg =
    scrolled || !isHome
      ? "bg-charcoal/95 backdrop-blur-md shadow-sm"
      : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo — DS2.png (no Private Estate Services text) */}
          <Link
            href="/"
            className={`flex items-center leading-none group cursor-pointer transition-opacity duration-500 ${
              isHome && !pastHero ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <div>
              <Image
                src="/images/DS2.png"
                alt="Driftwood & Stone"
                width={160}
                height={48}
                className="h-14 lg:h-16"
                style={{ width: "auto" }}
                preload
              />
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer
                  ${pathname === link.href
                    ? "text-driftwood-300"
                    : "text-white hover:text-cream"
                  }`}
                style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 500 }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`text-sm tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer
                ${pathname === "/contact"
                  ? "text-driftwood-300"
                  : "text-white hover:text-cream"
                }`}
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 500 }}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`block h-px w-6 bg-cream transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-cream transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-cream transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-charcoal/98 backdrop-blur-md`}
      >
        <nav className="flex flex-col px-6 pb-8 pt-2 gap-6" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base tracking-[0.2em] uppercase cursor-pointer transition-colors duration-300
                ${pathname === link.href ? "text-driftwood-300" : "text-white hover:text-cream"}`}
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 500 }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="self-start px-5 py-2.5 border border-white text-white text-sm tracking-[0.2em] uppercase cursor-pointer hover:bg-white hover:text-charcoal transition-all duration-300"
            style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 500 }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
