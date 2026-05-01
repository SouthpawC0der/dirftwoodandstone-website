import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "What We Provide | Driftwood & Stone",
  description:
    "Comprehensive estate management, personal support and lifestyle services delivered personally by Alec Mikels and Joey Levine.",
};

const pillars = [
  {
    title: "Comprehensive Coverage Without the Overhead",
    description:
      "Clients get the benefits of an in-house estate manager and personal assistant, without the overhead of salaries, benefits and turnover.",
  },
  {
    title: "Flexibility & Scalability",
    description:
      "Whether remote or on-site, our services adapt to what the client truly needs month to month, ranging from last-minute needs to support while you travel.",
  },
  {
    title: "Elite Vendor Network & Negotiation Power",
    description:
      "We collaborate with trusted contractors and service providers to ensure every task is executed by the right professional, saving clients both time and money.",
  },
  {
    title: "Bespoke Proactive Service",
    description:
      "Instead of waiting for problems to arise, we anticipate needs, manage logistics, and handle the fine details so clients can focus on enjoying their lives.",
  },
  {
    title: "Confidentiality & Trust",
    description:
      "Clients can rely on us to deliver discretion and confidentiality in all matters, and we utilize NDAs where necessary.",
  },
  {
    title: "Logistical Support",
    description:
      "Utilizing our in-house expertise, we design unique estate manuals, spreadsheets, and recurring logs catered to each individual property.",
  },
];

const serviceCategories = [
  {
    category: "Estate & Household Management",
    items: [
      "AV & Smart Home Technology",
      "Household staff coordination & oversight",
      "Vendor sourcing, management & scheduling",
      "Recurring Maintenance",
      "Estate manual & systems creation",
      "Invoice tracking & expense reporting",
    ],
  },
  {
    category: "Project & Renovation Oversight",
    items: [
      "Full-scale residential remodel management",
      "Owner's representation",
      "Budget and timeline oversight",
      "Pre-sale property preparation",
      "Punch list & quality assurance",
    ],
  },
  {
    category: "Personal & Lifestyle Support",
    items: [
      "Calendar & Schedule Management",
      "Travel Planning & Logistics",
      "Wellness & Health Coordination",
      "Animal Care & Management",
      "Access to Exclusive Events & Ticketing",
      "Moving & Relocation Support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── Page Header ──────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <Image
          src="/images/home13.jpg"
          alt="Estate background"
          fill
          className="object-cover object-center"
          sizes="100vw"
          preload
        />
        <div className="absolute inset-0 bg-charcoal/30" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p
            className="text-white text-sm tracking-[0.45em] uppercase mb-5 font-semibold"
            style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 600 }}
          >
            Our Approach
          </p>
          <h1
            className="text-cream text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8 font-semibold"
            style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 600 }}
          >
            What We Provide
          </h1>
        </div>
      </section>

      {/* ─── Tagline Bar ──────────────────────────────────────────── */}
      <div className="w-full bg-black py-5 px-6">
        <p
          className="text-white text-base leading-relaxed text-center max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 300 }}
        >
          A comprehensive, flexible suite of estate management, personal support and
          lifestyle services — adapted to your everyday needs.
        </p>
      </div>

      {/* ─── Why Us Pillars ───────────────────────────────────────── */}
      <section className="bg-cream py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-driftwood-500 text-sm tracking-[0.45em] uppercase mb-4 font-semibold"
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 600 }}
            >
              Our Approach
            </p>
            <h2
              className="text-stone-900 text-3xl sm:text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 700 }}
            >
              Why Driftwood &amp; Stone
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-driftwood-400" />
                </div>
                <div>
                  <h3
                    className="text-stone-900 text-base mb-3 leading-snug font-semibold"
                    style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 600 }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-stone-700 text-base leading-relaxed"
                    style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 400 }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Image Break ──────────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative w-full h-80 sm:h-[28rem] lg:h-[700px] overflow-hidden">
            <Image
              src="/images/calgarden.jpg"
              alt="Private estate grounds"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-10 py-16 lg:px-16 lg:py-20 xl:px-24 bg-stone-900">
            <p
              className="text-driftwood-400 text-sm tracking-[0.45em] uppercase mb-5 font-semibold"
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 600 }}
            >
              Our Standard
            </p>
            <h2
              className="text-cream text-3xl sm:text-4xl leading-snug mb-6 font-semibold"
              style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 600 }}
            >
              Discretion. Care. Attention to Detail.
            </h2>
          </div>
        </div>
      </section>

      {/* ─── Service Categories ───────────────────────────────────── */}
      <section className="bg-driftwood-50 py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-driftwood-500 text-sm tracking-[0.45em] uppercase mb-4 font-semibold"
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 600 }}
            >
              Full Range
            </p>
            <h2
              className="text-stone-900 text-3xl sm:text-4xl font-semibold"
              style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 600 }}
            >
              Areas of Expertise
            </h2>
            <p
              className="text-stone-700 text-sm mt-4 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 400 }}
            >
              Every client&apos;s needs are unique. The categories below represent our core
              areas — though our services extend well beyond these examples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {serviceCategories.map((cat) => (
              <div
                key={cat.category}
                className="bg-cream p-8 lg:p-10 border border-driftwood-100"
              >
                <div className="w-10 h-px bg-driftwood-400 mb-6" />
                <h3
                  className="text-stone-900 text-sm tracking-[0.08em] uppercase mb-7 leading-snug font-semibold"
                  style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 600 }}
                >
                  {cat.category}
                </h3>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-driftwood-400" />
                      <span
                        className="text-stone-700 text-base leading-relaxed"
                        style={{
                          fontFamily: "var(--font-josefin, sans-serif)",
                          fontWeight: 400,
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Eye-Catching Image Band ──────────────────────────────── */}
      <section className="relative w-full h-[60vh] lg:h-[75vh] overflow-hidden">
        <Image
          src="/images/home9.jpg"
          alt="Expertly managed private estate"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/55 flex flex-col items-center justify-center text-center px-6">
          <p
            className="text-cream text-3xl sm:text-4xl lg:text-5xl text-balance font-semibold"
            style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 600 }}
          >
            Your Life. Expertly Managed.
          </p>
        </div>
      </section>

      {/* ─── Separator ────────────────────────────────────────────── */}
      <div className="bg-cream pt-12 pb-6 flex items-center justify-center">
        <div className="w-px h-12 bg-driftwood-300" />
      </div>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-cream py-12 px-6">
        <div className="max-w-xl mx-auto text-center">
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
