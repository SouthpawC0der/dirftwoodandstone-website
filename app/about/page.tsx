import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Driftwood & Stone",
  description:
    "Meet Alec Mikels and Joey Levine — the experienced estate management professionals behind Driftwood & Stone.",
};

const team = [
  {
    name: "Alec Mikels",
    role: "Co-Founder & Estate Manager",
    bio: [
      "Alec Mikels is an estate management professional and entrepreneur with a foundation in hands-on business ownership and hospitality. A graduate of Bentley University with a BAS in Entrepreneurship, he launched a handyman and property services company immediately after college, gaining early experience in property care, vendor coordination, and client service.",
      "He went on to spend a decade in the restaurant and hospitality industry, refining his operational leadership, attention to detail, and client-facing skills. During this time, he discovered estate management as the ideal intersection of property oversight and high-level service, prompting his move to Los Angeles to pursue it full-time.",
      "After ten years in the field, Alec co-founded Driftwood and Stone, serving clients seeking trusted, detail-oriented estate and property management. Today, he brings together his entrepreneurial mindset, hospitality background, and operational expertise to deliver seamless, discreet service that allows clients to enjoy their homes with complete peace of mind.",
    ],
  },
  {
    name: "Joey Levine",
    role: "Co-Founder & Estate Manager",
    bio: [
      "Joey Levine is an experienced estate manager, owner's representative and project manager with 20 years of experience supporting high-net-worth principals and senior executives. He specializes in overseeing full-scale residential remodels, estate operations, and client-driven lifestyle support, serving as a trusted right hand in complex, high-stakes environments.",
      "His work includes partnering closely with contractors, designers, and specialized vendors while maintaining oversight of budgets, timelines, and overall project strategy — translating complex decisions into clear, actionable guidance. Known for sound judgment and discretion, he untangles obstacles and turns them into progress.",
      "Additionally, Joey spent two decades in senior communications roles at NBCUniversal, Netflix, and Oprah Winfrey's organization, advising chairman-level executives, managing multi-million-dollar initiatives, and leading high-profile, global campaigns.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Page Header ──────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <Image
          src="/images/home21_no_watermark.jpg"
          alt="Estate background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          style={{ objectPosition: "center 28%" }}
        />
        <div className="absolute inset-0 bg-charcoal/30" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p
            className="text-cream text-base sm:text-lg tracking-[0.5em] uppercase mb-5 font-semibold"
            style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 700, textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
          >
            The Team
          </p>
          <h1
            className="text-cream text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8 font-semibold"
            style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 600 }}
          >
            About Us
          </h1>
        </div>
      </section>

      {/* ─── Tagline Bar ──────────────────────────────────────────── */}
      <div className="w-full bg-black py-5 px-6">
        <p
          className="text-white text-base leading-relaxed text-center max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 300 }}
        >
          Two estate professionals who built a practice around one belief: exceptional
          service is deeply personal, thoughtfully delivered and executed at the highest level.
        </p>
      </div>

      {/* ─── Team Bios ────────────────────────────────────────────── */}
      <section className="bg-cream py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {team.map((member, index) => (
              <article key={member.name} className="flex flex-col">
                {/* Portrait placeholder */}
                <div className="w-full aspect-[4/5] mb-10 relative overflow-hidden">
                  {index === 1 ? (
                    <Image
                      src="/images/joey.jpg"
                      alt="Joey Levine"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <Image
                      src="/images/portshot.jpg"
                      alt="Alec Mikels"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      style={{ objectPosition: "30% top" }}
                    />
                  )}
                </div>

                <div className="flex flex-col gap-1 mb-6">
                  <h2
                    className="text-stone-900 text-2xl sm:text-3xl font-semibold"
                    style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 600 }}
                  >
                    {member.name}
                  </h2>
                  <p
                    className="text-driftwood-500 text-sm tracking-[0.25em] uppercase mt-1 font-semibold"
                    style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 600 }}
                  >
                    {member.role}
                  </p>
                </div>

                <div className="space-y-4">
                  {member.bio.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-stone-800 text-base leading-relaxed"
                      style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 400 }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Full-Width Image Break (home1) ───────────────────────── */}
      <section className="relative w-full h-[60vh] lg:h-[75vh] overflow-hidden">
        <Image
          src="/images/home1.jpg"
          alt="Private estate"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      {/* ─── Philosophy Band ──────────────────────────────────────── */}
      <section className="bg-driftwood-50 py-24 lg:py-28 px-6 border-t border-b border-driftwood-100">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-driftwood-500 text-sm tracking-[0.45em] uppercase mb-8 font-semibold"
            style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 600 }}
          >
            Our Philosophy
          </p>
          <p
            className="text-stone-800 text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-balance font-medium"
            style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 500 }}
          >
            We designed a practice built on discretion, trust, and a genuine investment in
            each client&apos;s wellbeing.
          </p>
        </div>
      </section>

      {/* ─── Split Image Section (home2) ──────────────────────────── */}
      <section className="bg-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative w-full h-80 sm:h-[28rem] lg:h-[700px] overflow-hidden">
            <Image
              src="/images/home8.jpg"
              alt="Estate exterior"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Text */}
          <div className="flex flex-col justify-center px-10 py-16 lg:px-16 lg:py-20 xl:px-24">
            <p
              className="text-driftwood-500 text-sm tracking-[0.45em] uppercase mb-5 font-semibold"
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 600 }}
            >
              Our Commitment
            </p>
            <h2
              className="text-stone-900 text-3xl sm:text-4xl leading-snug mb-7 font-semibold"
              style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 600 }}
            >
              Every Home.<br />Every Detail.
            </h2>
            <p
              className="text-stone-700 text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 400 }}
            >
              We bring the same level of care to every property we manage — whether it&apos;s
              coordinating a full renovation or ensuring your home is perfectly prepared for
              your arrival.
            </p>
            <Link
              href="/services"
              className="self-start text-sm tracking-[0.2em] uppercase text-driftwood-500 border-b border-driftwood-300 pb-0.5 hover:text-driftwood-700 hover:border-driftwood-500 transition-colors duration-300 cursor-pointer"
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 500 }}
            >
              What We Provide
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Separator ────────────────────────────────────────────── */}
      <div className="bg-cream pt-12 pb-6 flex items-center justify-center">
        <div className="w-px h-12 bg-driftwood-300" />
      </div>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-cream py-12 px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-driftwood-500 text-cream text-sm tracking-[0.2em] uppercase hover:bg-driftwood-400 transition-colors duration-300 cursor-pointer text-center"
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 500 }}
            >
              Contact
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border border-stone-300 text-stone-600 text-sm tracking-[0.2em] uppercase hover:border-driftwood-400 hover:text-driftwood-600 transition-colors duration-300 cursor-pointer text-center"
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 400 }}
            >
              What We Provide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
