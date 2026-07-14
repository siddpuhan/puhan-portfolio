import { validateContact } from "@/lib/contact-validation";
import { persistAndNotify } from "@/lib/contact-core";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const { values, fieldErrors } = validateContact({
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
    });

    if (!values) {
      const firstError = Object.values(fieldErrors)[0];
      return Response.json(
        { ok: false, error: firstError ?? "Please complete every field." },
        { status: 400 },
      );
    }

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
    const date = new Date().toLocaleString();
    const result = await persistAndNotify({ ...values, ip, date });
    if (!result.ok) {
      return Response.json({ ok: false, error: result.error }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed", error);
    return Response.json(
      { ok: false, error: "Something went wrong. Please email directly." },
      { status: 500 },
    );
  }
}
