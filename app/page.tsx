import Link from "next/link";
import Image from "next/image";
import VideoHero from "./components/VideoHero";
import RotatingTagline from "./components/RotatingTagline";
import ParallaxGarden from "./components/ParallaxGarden";

const services = [
  {
    title: "Household Management",
    description:
      "Comprehensive oversight of your home — staff coordination, vendor management, and day-to-day operations handled with precision.",
  },
  {
    title: "Construction &\nRenovation Oversight",
    description:
      "As owner's representatives, we manage your project from concept to completion. We oversee contractors, architects and designers, so your home project runs on time and on budget.",
  },
  {
    title: "Personal Support",
    description:
      "Providing behind-the-scenes support across all areas of your life so everything runs as it should — keeping your days organized, efficient, and stress-free.",
  },
  {
    title: "Lifestyle Services",
    description:
      "We coordinate the key elements of your lifestyle — from travel and wellness to high-value inventory — ensuring everything stays organized and effortless.",
  },
  {
    title: "Sale Preparation",
    description:
      "We prepare your home for market — coordinating staging, repairs, and inspections with a discerning eye.",
  },
  {
    title: "While You're Away",
    description:
      "Manage all aspects of your home while you're away — routine checks, vendor access and detailed reporting.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <VideoHero videoSrc="/videos/sky.mp4" contentClassName="pb-47">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* DS4.png — logo with Private Estate Services text */}
          <div
            className="mb-6 animate-fade-up"
            style={{ position: "relative", top: "-100px" }}
          >
            <Image
              src="/images/DAS-LOGO-ONELINE-DESCRIPTOR-RGB_WHITE.png"
              alt="Driftwood & Stone — Private Estate Services"
              width={1360}
              height={800}
              className="w-[896px] sm:w-[1152px] lg:w-[1280px] xl:w-[1360px] max-w-full h-auto object-contain"
              priority
              style={{
                filter:
                  "drop-shadow(0 4px 24px rgba(0,0,0,0.7)) drop-shadow(0 1px 6px rgba(0,0,0,0.9))",
              }}
            />
          </div>

          {/* Rotating tagline — absolutely positioned */}
          <div
            className="animate-fade-up animate-delay-200"
            style={{ position: "absolute", bottom: "230px", left: 0, right: 0, textAlign: "center" }}
          >
            <RotatingTagline className="text-white text-base sm:text-lg tracking-[0.15em] uppercase mb-2" />
          </div>

          {/* Buttons — absolutely positioned independently */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-delay-300"
            style={{ position: "absolute", bottom: "165px", left: 0, right: 0 }}
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-driftwood-500 text-cream text-sm tracking-[0.2em] uppercase hover:bg-driftwood-400 transition-colors duration-300 cursor-pointer min-w-[180px] text-center"
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 500 }}
            >
              Contact
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border border-white text-white text-sm tracking-[0.2em] uppercase hover:bg-driftwood-500 hover:border-driftwood-500 hover:text-cream transition-colors duration-300 cursor-pointer min-w-[180px] text-center"
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 400 }}
            >
              What We Provide
            </Link>
          </div>
        </div>
      </VideoHero>

      {/* ─── Mission ──────────────────────────────────────────────── */}
      <section className="bg-cream py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-driftwood-600 text-sm tracking-[0.35em] uppercase mb-6 font-bold"
            style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 700 }}
          >
            Our Mission
          </p>
          <h2
            className="text-stone-900 text-3xl sm:text-4xl lg:text-5xl mb-10 leading-snug text-balance font-bold"
            style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 700 }}
          >
            We Want To Give You Back Your Most Valuable Asset:{" "}
            <span className="text-driftwood-600">Time</span>
          </h2>
          <div
            className="text-stone-900 text-base leading-relaxed space-y-5 max-w-3xl mx-auto text-left sm:text-center"
            style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 400 }}
          >
            <p>
              The most successful people share one common challenge: there&apos;s never enough
              time. That&apos;s where we come in. Between professional demands and personal
              priorities, we are two experienced estate and project managers — Alec Mikels and
              Joey Levine — who have designed a thoughtful, highly tailored solution that allows
              you to spend more time enjoying life and less time managing it.
            </p>
            <p>
              Our mission is simple: to make upscale estate management and lifestyle support accessible, tailored, and stress-free, delivered personally by us as a seamless extension of your household.
            </p>
            <p>
              Whether you need household management, renovation oversight,
              preparing a home for sale, travel planning, or simply personal assistance, we
              deliver flexible, on-demand support designed around your lifestyle. And because
              every client&apos;s needs are unique, our services extend far beyond these examples
              — always delivered with discretion, expertise, and a commitment to making your
              life easier.
            </p>
          </div>
          <div className="mt-10">
            <Link
              href="/about"
              className="inline-block text-sm tracking-[0.2em] uppercase text-driftwood-500 border-b border-driftwood-300 pb-0.5 hover:text-driftwood-700 hover:border-driftwood-500 transition-colors duration-300 cursor-pointer"
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 500 }}
            >
              Meet Alec Mikels &amp; Joey Levine
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Full-Width Garden (Parallax Reveal) ─────────────────── */}
      <ParallaxGarden />

      {/* ─── Services Grid ────────────────────────────────────────── */}
      <section className="bg-cream py-24 lg:py-32 px-6 border-t border-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-driftwood-500 text-sm tracking-[0.45em] uppercase mb-4 font-bold"
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 700 }}
            >
              Services
            </p>
            <h2
              className="text-stone-900 text-3xl sm:text-4xl font-semibold"
              style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 600 }}
            >
              Thoughtfully Curated Support
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-cream p-8 lg:p-10 hover:bg-driftwood-50 transition-colors duration-300 group cursor-default"
              >
                <div className="w-8 h-px bg-driftwood-400 mb-6 group-hover:w-12 transition-all duration-300" />
                <h3
                  className="text-stone-900 text-lg tracking-[0.1em] uppercase mb-4 font-semibold whitespace-pre-line"
                  style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 600 }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-stone-700 text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 400 }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-4 border border-stone-400 text-stone-700 text-sm tracking-[0.2em] uppercase hover:border-driftwood-500 hover:text-driftwood-600 transition-colors duration-300 cursor-pointer"
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 500 }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Split 1: Image Left / Text Right ─────────────────────── */}
      <section className="bg-cream border-t border-stone-100">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative w-full h-80 sm:h-[28rem] lg:h-[800px] overflow-hidden">
            <Image
              src="/images/home2.jpg"
              alt="California estate managed by Driftwood and Stone"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-10 py-16 lg:px-16 lg:py-20 xl:px-24">
            <p
              className="text-driftwood-600 text-sm tracking-[0.45em] uppercase mb-5 font-bold"
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 700 }}
            >
              Estate Management
            </p>
            <h2
              className="text-stone-900 text-3xl sm:text-4xl lg:text-3xl xl:text-4xl leading-snug mb-7 text-balance font-semibold"
              style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 600 }}
            >
              Your home, managed as it should be
            </h2>
            <p
              className="text-stone-700 text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 400 }}
            >
              From vendor coordination to seasonal property maintenance, we oversee every
              detail of your home&apos;s operation — so your property functions flawlessly
              whether you&apos;re in residence or away.
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

      {/* ─── Split 2: Text Left / Image Right ─────────────────────── */}
      <section className="bg-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center px-10 py-16 lg:px-16 lg:py-20 xl:px-24 order-2 lg:order-1">
            <p
              className="text-driftwood-600 text-sm tracking-[0.45em] uppercase mb-5 font-bold"
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 700 }}
            >
              Personal &amp; Lifestyle
            </p>
            <h2
              className="text-stone-900 text-3xl sm:text-4xl lg:text-3xl xl:text-4xl leading-snug mb-7 text-balance font-semibold"
              style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 600 }}
            >
              Every detail of your life, handled before you ask
            </h2>
            <p
              className="text-stone-700 text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 400 }}
            >
              We anticipate your needs and coordinate the fine details, so your life runs
              smoothly and exactly as you want it to.
            </p>
            <Link
              href="/contact"
              className="self-start text-sm tracking-[0.2em] uppercase text-driftwood-500 border-b border-driftwood-300 pb-0.5 hover:text-driftwood-700 hover:border-driftwood-500 transition-colors duration-300 cursor-pointer"
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 500 }}
            >
              Contact
            </Link>
          </div>
          <div className="relative w-full h-80 sm:h-[28rem] lg:h-[800px] overflow-hidden order-1 lg:order-2">
            <Image
              src="/images/inside.jpg"
              alt="Beautifully managed home interior"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ─── Separator ────────────────────────────────────────────── */}
      <div className="bg-cream py-6 flex items-center justify-center">
        <div className="w-px h-12 bg-driftwood-300" />
      </div>

      {/* ─── Dark CTA Band ────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 px-6 overflow-hidden">
        <Image
          src="/images/home19.png"
          alt="Estate background"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-stone-900/30" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p
            className="text-cream text-2xl sm:text-3xl lg:text-4xl leading-snug mb-10 text-balance"
            style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 400 }}
          >
            We don&apos;t just manage your life &mdash; we elevate it.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-driftwood-500 text-cream text-sm tracking-[0.2em] uppercase hover:bg-driftwood-400 transition-colors duration-300 cursor-pointer"
            style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 500 }}
          >
            Contact
          </Link>
        </div>
      </section>
    </>
  );
}
