import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "./ContactForm";
import RotatingTagline from "../components/RotatingTagline";
import { submitContactForm } from "../actions/contact";

export const metadata: Metadata = {
  title: "Contact | Driftwood & Stone",
  description:
    "Connect with Driftwood & Stone. Fill out our intake form and we'll be in touch within one business day.",
};

export default function ContactPage() {
  return (
    <>
      {/* ─── Page Header ──────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <Image
          src="/images/home12.jpg"
          alt="Contact background"
          fill
          className="object-cover"
          sizes="100vw"
          preload
          style={{ objectPosition: "center 45%" }}
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p
            className="text-cream text-base sm:text-lg tracking-[0.5em] uppercase mb-5 font-semibold"
            style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 700, textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
          >
            Get In Touch
          </p>
          <h1
            className="text-cream text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8 font-semibold"
            style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 600 }}
          >
            Contact
          </h1>
        </div>
      </section>

      {/* ─── Tagline Bar ──────────────────────────────────────────── */}
      <div className="w-full bg-black py-5 px-6">
        <p
          className="text-white text-base leading-relaxed text-center max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 300 }}
        >
          Tell us about your property and how we can best support you.
        </p>
      </div>

      {/* ─── Contact Layout ───────────────────────────────────────── */}
      <section className="bg-cream py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">

            {/* Left: image + contact info stacked */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              {/* home3 image */}
              <div className="relative w-full h-96 sm:h-[34rem] overflow-hidden">
                <Image
                  src="/images/home23.png"
                  alt="Private estate"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  style={{ objectPosition: "center 70%" }}
                />
              </div>

              <div>
                <p
                  className="text-sm tracking-[0.4em] uppercase text-driftwood-500 mb-5"
                  style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 500 }}
                >
                  Direct Contact
                </p>
                <div className="space-y-4">
                  <div>
                    <p
                      className="text-[10px] tracking-widest uppercase text-stone-400 mb-1"
                      style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 400 }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:info@driftwoodandstonehomes.com"
                      className="text-stone-700 text-base hover:text-driftwood-600 transition-colors duration-300 cursor-pointer"
                      style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 400 }}
                    >
                      info@driftwoodandstonehomes.com
                    </a>
                  </div>
                  <div>
                    <p
                      className="text-[10px] tracking-widest uppercase text-stone-400 mb-1"
                      style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 400 }}
                    >
                      Instagram
                    </p>
                    <a
                      href="https://www.instagram.com/DriftwoodandStoneHomes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-700 text-base hover:text-driftwood-600 transition-colors duration-300 cursor-pointer flex items-center gap-2 w-fit"
                      style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 400 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
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
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <p
                className="text-sm tracking-[0.4em] uppercase text-driftwood-500 mb-8 font-semibold"
                style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 600 }}
              >
                Intake Form
              </p>
              <ContactForm action={submitContactForm} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Full-Width Closing Image ─────────────────────────────── */}
      <section className="relative w-full h-[60vh] lg:h-[75vh] overflow-hidden">
        <Image
          src="/images/home22.png"
          alt="Estate property"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/25 flex flex-col items-center justify-center text-center px-6">
          <RotatingTagline
            className="text-cream text-2xl sm:text-3xl lg:text-4xl font-semibold text-balance"
            style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 600, marginTop: "15px" }}
          />
        </div>
      </section>
    </>
  );
}
