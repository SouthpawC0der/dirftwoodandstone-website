"use client";

import { useActionState } from "react";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

type ContactFormAction = (
  prevState: ContactFormState,
  formData: FormData
) => Promise<ContactFormState>;

const serviceOptions = [
  "Household Management",
  "Project & Renovation Oversight",
  "Personal & Lifestyle",
  "Sale Preparation",
  "While You're Away",
  "Multiple Services / Not Sure Yet",
];

const initialState: ContactFormState = { status: "idle" };

const inputClass =
  "w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 text-sm placeholder-stone-400 focus:outline-none focus:border-driftwood-500 transition-colors duration-300";

const labelClass =
  "block text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-2";

export default function ContactForm({ action }: { action: ContactFormAction }) {
  const [state, formAction, isPending] = useActionState(action, initialState);

  if (state.status === "success") {
    return (
      <div className="py-16 text-center">
        <div className="w-12 h-px bg-driftwood-400 mx-auto mb-8" />
        <h2
          className="text-stone-900 text-2xl mb-4"
          style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 400 }}
        >
          Thank You
        </h2>
        <p
          className="text-stone-500 text-sm leading-relaxed max-w-sm mx-auto"
          style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 300 }}
        >
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-8" noValidate>
      {/* Error message */}
      {state.status === "error" && (
        <div
          role="alert"
          className="px-4 py-3 border border-red-200 bg-red-50 text-red-700 text-xs"
          style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 400 }}
        >
          {state.message}
        </div>
      )}

      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className={labelClass}
            style={{ fontFamily: "var(--font-josefin, sans-serif)" }}>
            Full Name <span className="text-driftwood-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            className={inputClass}
            style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 300 }}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}
            style={{ fontFamily: "var(--font-josefin, sans-serif)" }}>
            Email Address <span className="text-driftwood-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className={inputClass}
            style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 300 }}
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}
          style={{ fontFamily: "var(--font-josefin, sans-serif)" }}>
          Phone Number{" "}
          <span className="text-stone-400 normal-case tracking-normal">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+1 (___) ___-____"
          className={inputClass}
          style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 300 }}
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className={labelClass}
          style={{ fontFamily: "var(--font-josefin, sans-serif)" }}>
          Area of Interest
        </label>
        <select
          id="service"
          name="service"
          className={`${inputClass} cursor-pointer appearance-none`}
          style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 300 }}
          defaultValue=""
        >
          <option value="" disabled>
            Select a service area
          </option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}
          style={{ fontFamily: "var(--font-josefin, sans-serif)" }}>
          Tell Us About Your Needs <span className="text-driftwood-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Briefly describe your property and what kind of support you're looking for..."
          className={`${inputClass} resize-none`}
          style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 300 }}
        />
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="px-10 py-4 bg-driftwood-500 text-cream text-xs tracking-[0.2em] uppercase hover:bg-driftwood-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-300 cursor-pointer min-w-[180px] text-center"
          style={{ fontFamily: "var(--font-josefin, sans-serif)", fontWeight: 500 }}
        >
          {isPending ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
