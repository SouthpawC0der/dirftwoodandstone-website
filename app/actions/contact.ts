"use server";

import { Resend } from "resend";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const service = formData.get("service")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Driftwood & Stone <notreply@driftwoodandstonehomes.com>",
      to: "info@driftwoodandstonehomes.com",
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Service Interest: ${service || "—"}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });
  } catch (err) {
    console.error("[Contact Form] Email send failed:", err);
    return {
      status: "error",
      message: "Something went wrong. Please try again or email us directly.",
    };
  }

  return {
    status: "success",
    message: "Thank you for reaching out. We'll be in touch shortly.",
  };
}
