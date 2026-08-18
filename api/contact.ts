import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const TO_EMAIL = "spoorthikengol27@gmail.com";
const MAX_FIELD_LENGTH = 5000;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message, company } = req.body ?? {};

  // Honeypot — a filled-in "company" field means it's very likely a bot.
  if (typeof company === "string" && company.trim() !== "") {
    return res.status(200).json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return res.status(400).json({ error: "Name, email and message are required." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  if (
    name.length > MAX_FIELD_LENGTH ||
    email.length > MAX_FIELD_LENGTH ||
    message.length > MAX_FIELD_LENGTH ||
    (typeof subject === "string" && subject.length > MAX_FIELD_LENGTH)
  ) {
    return res.status(400).json({ error: "One of the fields is too long." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return res.status(500).json({ error: "Email service is not configured." });
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      // Update this to a verified sending domain in Resend before going live —
      // resend.dev addresses only deliver to the account owner's own inbox.
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: subject?.trim() ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ error: "Failed to send the message. Please try again." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}
