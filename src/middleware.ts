import { defineMiddleware } from "astro:middleware";

// Security headers applied to every server-rendered response.
// A full Content-Security-Policy is intentionally omitted: the site embeds
// YouTube and Google Docs and loads images from CloudFront, so a strict policy
// would need careful tuning. `frame-ancestors` is safe on its own.
const SECURITY_HEADERS: Record<string, string> = {
  "Strict-Transport-Security": "max-age=31536000",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Content-Security-Policy": "frame-ancestors 'self'",
  "X-Frame-Options": "SAMEORIGIN",
  "Cross-Origin-Opener-Policy": "same-origin",
};

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  try {
    for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
      response.headers.set(name, value);
    }
  } catch {
    // Some responses (e.g. redirects) have immutable headers; skip them.
  }
  return response;
});
