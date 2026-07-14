import { Resend } from "resend";

let _resend: Resend | null = null;

function getResend(): Resend {
  if (!_resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not configured.");
    }
    _resend = new Resend(apiKey);
  }
  return _resend;
}

const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";
const FROM_NAME = process.env.CONTACT_FROM_NAME ?? "Siddharth Puhan";
const FROM_ADDRESS = `${FROM_NAME} <${FROM_EMAIL}>`;
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "puhansiddharth@gmail.com";

export type ContactSubmission = {
  name: string;
  email: string;
  subject: string;
  message: string;
  ip?: string;
  date?: string;
};

export type EmailResult = { ok: true } | { ok: false; error: string };

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAndFormat(message: string): string {
  return escapeHtml(message).replace(/\n/g, "<br>");
}

export async function sendOwnerNotification(
  data: ContactSubmission,
): Promise<EmailResult> {
  const { name, email, subject, message, ip, date } = data;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeAndFormat(message);
  const safeIp = ip ? escapeHtml(ip) : "Not provided";
  const safeDate = date ? escapeHtml(date) : new Date().toLocaleString();

  const html = `
    <h2>🚀 New Portfolio Contact — ${safeSubject}</h2>
    <p><strong>Name:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Subject:</strong> ${safeSubject}</p>
    <p><strong>Date &amp; Time:</strong> ${safeDate}</p>
    <p><strong>IP:</strong> ${safeIp}</p>
    <br/>
    <p><strong>Message:</strong></p>
    <p>${safeMessage}</p>
  `;

  try {
    const { error } = await getResend().emails.send({
      from: FROM_ADDRESS,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `🚀 New Portfolio Contact — ${subject}`,
      html,
    });

    if (error) {
      console.error("Resend Error (Owner Email):", error);
      return { ok: false, error: "Email delivery failed" };
    }
    return { ok: true };
  } catch (error) {
    console.error("Resend Exception (Owner Email):", error);
    return { ok: false, error: "Internal error occurred" };
  }
}

export async function sendVisitorConfirmation(
  data: ContactSubmission,
): Promise<EmailResult> {
  const { name, email } = data;
  
  const html = `
    <p>Hi ${escapeHtml(name)},</p>
    <br/>
    <p>Thank you for contacting me.</p>
    <br/>
    <p>I've successfully received your message and will get back to you within 24–48 hours.</p>
    <br/>
    <p>If your inquiry is urgent, please contact me directly:</p>
    <p>puhansiddharth@gmail.com</p>
    <br/>
    <p>Regards,</p>
    <p>Siddharth Puhan</p>
    <p>Full Stack Developer</p>
  `;

  try {
    const { error } = await getResend().emails.send({
      from: FROM_ADDRESS,
      to: [email],
      subject: "Thanks for reaching out!",
      html,
    });

    if (error) {
      console.error("Resend Error (Visitor Email):", error);
      return { ok: false, error: "Email delivery failed" };
    }
    return { ok: true };
  } catch (error) {
    console.error("Resend Exception (Visitor Email):", error);
    return { ok: false, error: "Internal error occurred" };
  }
}
