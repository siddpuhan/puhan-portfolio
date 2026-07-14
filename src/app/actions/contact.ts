"use server";

import { headers } from "next/headers";
import { validateContact, type ContactFieldErrors } from "@/lib/contact-validation";
import { checkRateLimit } from "@/lib/rate-limit";
import { persistAndNotify } from "@/lib/contact-core";

export type ContactState = {
  ok: boolean;
  error?: string;
  fieldErrors?: ContactFieldErrors;
};

const HONEYPOT_FIELD = "website";

async function getClientIp(): Promise<string> {
  const h = await headers();
  const forwarded = h.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]!.trim();
  }
  return h.get("x-real-ip") ?? "unknown";
}

export async function submitContact(
  _prev: ContactState | undefined,
  formData: FormData,
): Promise<ContactState> {
  // 1. Honeypot — silently succeed for bots so they don't retry.
  const honeypot = formData.get(HONEYPOT_FIELD)?.toString() ?? "";
  if (honeypot.trim() !== "") {
    return { ok: true };
  }

  // 2. Rate limiting (per IP, sliding window).
  const ip = await getClientIp();
  const rate = checkRateLimit(`contact:${ip}`);
  if (!rate.allowed) {
    return {
      ok: false,
      error: `Too many messages. Please try again in ${rate.retryAfterSeconds ?? 60} seconds.`,
    };
  }

  // 3. Server-side validation.
  const { values, fieldErrors } = validateContact({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!values) {
    return { ok: false, fieldErrors };
  }

  // 4. Notify via Resend.
  const date = new Date().toLocaleString();
  const result = await persistAndNotify({ ...values, ip, date });
  if (!result.ok) {
    return { ok: false, error: result.error };
  }

  return { ok: true };
}
