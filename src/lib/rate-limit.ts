const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

const attempts = new Map<string, number[]>();

/**
 * In-memory sliding-window rate limiter.
 *
 * NOTE: This is per server instance. On serverless (multi-instance) deployments
 * prefer a shared store (e.g. Upstash Redis / Vercel KV). It is intentionally
 * simple and safe as a first line of defense alongside the honeypot.
 */
export function checkRateLimit(key: string): {
  allowed: boolean;
  retryAfterSeconds?: number;
} {
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    const oldest = recent[0];
    const retryAfterSeconds = Math.ceil((WINDOW_MS - (now - oldest)) / 1000);
    attempts.set(key, recent);
    return { allowed: false, retryAfterSeconds };
  }

  recent.push(now);
  attempts.set(key, recent);
  return { allowed: true };
}
