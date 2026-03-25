/**
 * PostHog analytics with proxy configuration.
 *
 * The proxy rewrites requests through your own domain to avoid ad blockers.
 * Configure the following env vars:
 *   PUBLIC_PH_KEY   - Your PostHog project API key
 *   PUBLIC_PH_HOST  - Your proxy path (defaults to /t/v)
 *
 * Deploy-level rewrites are configured in:
 *   - netlify.toml  (for Netlify)
 *   - vercel.json   (for Vercel)
 *
 * The rewrite rules map:
 *   /t/v/static/*  -> https://us-assets.i.posthog.com/static/*   (JS bundle)
 *   /t/v/*         -> https://us.i.posthog.com/*                  (API ingest)
 */

export function getAnalyticsConfig() {
  const apiKey = import.meta.env.PUBLIC_PH_KEY || '';
  const apiHost = import.meta.env.PUBLIC_PH_HOST || '/t/v';

  return { apiKey, apiHost };
}
