import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL("https://endigodesign.com");

  const staticPaths = ["/", "/about"];
  const works = await getCollection("works");
  const workPaths = works.map((entry) => `/works/${entry.id}`);

  const urls = [...staticPaths, ...workPaths]
    .map((path) => `  <url><loc>${new URL(path, base).href}</loc></url>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
