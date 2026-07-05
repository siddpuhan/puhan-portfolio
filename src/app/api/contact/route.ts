import { db } from "@/db";
import { contactMessages } from "@/db/schema";

export const dynamic = "force-dynamic";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = sanitize(body.name);
    const email = sanitize(body.email).toLowerCase();
    const subject = sanitize(body.subject);
    const message = sanitize(body.message);

    if (!name || !email || !subject || !message) {
      return Response.json({ ok: false, error: "Please complete every field." }, { status: 400 });
    }

    if (!emailPattern.test(email)) {
      return Response.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    if (message.length < 20) {
      return Response.json({ ok: false, error: "Please add a little more context." }, { status: 400 });
    }

    await db.insert(contactMessages).values({ name, email, subject, message });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed", error);
    return Response.json({ ok: false, error: "Something went wrong. Please email directly." }, { status: 500 });
  }
}
