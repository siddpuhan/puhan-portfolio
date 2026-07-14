import {
  sendOwnerNotification,
  sendVisitorConfirmation,
  type ContactSubmission,
} from "@/lib/email";

export type ProcessResult = { ok: true } | { ok: false; error: string };

/**
 * Sends both the owner notification and the visitor confirmation email.
 * Shared by the server action and the /api/contact route.
 */
export async function persistAndNotify(
  values: ContactSubmission,
): Promise<ProcessResult> {
  // 1. Try sending the owner email first.
  const ownerResult = await sendOwnerNotification(values);

  if (!ownerResult.ok) {
    // If owner email fails, we return a friendly error message and do not try visitor email.
    return {
      ok: false,
      error: "We couldn't send your message. Please try again or email me directly.",
    };
  }

  // 2. Owner email succeeded, try visitor email.
  const visitorResult = await sendVisitorConfirmation(values);

  if (!visitorResult.ok) {
    // Visitor email failed, but we still consider it a success since the owner got the message.
    console.warn("Visitor confirmation email failed, but owner email succeeded.");
  }

  return { ok: true };
}
