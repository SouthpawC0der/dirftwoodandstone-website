"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import FooterTagline from "./FooterTagline";

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className="bg-charcoal text-stone-300 relative">
      {pathname === "/" && (
        <a
          href="https://www.dspacestudio.com/los-angeles"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-6 lg:right-10 text-white text-xs tracking-wide hover:text-cream transition-colors duration-300"
          style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 300 }}
        >
          Courtesy dSPACE Studio / Tony Soluri
        </a>
      )}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block cursor-pointer group mb-4">
              <Image
                src="/images/DS5.png"
                alt="Driftwood & Stone"
                width={180}
                height={180}
                className="w-72 h-auto object-contain"
              />
            </Link>
            <FooterTagline />
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase text-white mb-5"
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 500 }}
            >
              Navigation
            </p>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "What We Provide" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base text-white hover:text-cream transition-colors duration-300 cursor-pointer w-fit"
                  style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 300 }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase text-white mb-5"
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 500 }}
            >
              Get In Touch
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@driftwoodandstonehomes.com"
                className="text-base text-white hover:text-cream transition-colors duration-300 cursor-pointer w-fit"
                style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 300 }}
              >
                info@driftwoodandstonehomes.com
              </a>
              <a
                href="https://www.instagram.com/DriftwoodandStoneHomes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-white hover:text-cream transition-colors duration-300 cursor-pointer w-fit flex items-center gap-2"
                style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 300 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 flex-shrink-0"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
                @DriftwoodandStoneHomes
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-sm text-white tracking-wide"
            style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 300 }}
          >
            &copy; {year} Driftwood &amp; Stone. All rights reserved. Fully insured.
          </p>
          <p
            className="text-sm text-white tracking-wide"
            style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 300 }}
          >
            Private Estate Services
          </p>
        </div>
      </div>
    </footer>
  );
}
