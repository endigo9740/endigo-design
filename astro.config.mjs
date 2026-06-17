import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "astro-auto-import";

// https://astro.build/config
export default defineConfig({
  // Production URL — used for canonical links, Open Graph tags, and the sitemap.
  site: "https://endigodesign.com",
  output: "server",
  // https://docs.astro.build/en/reference/configuration-reference/#devtoolbarenabled
  devToolbar: { enabled: false },
  // https://docs.astro.build/en/guides/integrations-guide/cloudflare/
  adapter: cloudflare(),
  integrations: [
    // https://github.com/delucis/astro-auto-import/tree/main/packages/astro-auto-import
    AutoImport({
      imports: [
        {
          // import componentSet from "@components/mdx/index";
          "@components/mdx/index": [["default", "componentSet"]],
        },
      ],
    }),
    // https://docs.astro.build/en/guides/integrations-guide/mdx/
    mdx(),
    // https://docs.astro.build/en/guides/integrations-guide/react/
    react(),
  ],
  vite: {
    plugins: [
      // https://tailwindcss.com/docs/installation/framework-guides/astro
      tailwindcss(),
    ],
  },
});
