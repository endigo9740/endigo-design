import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // Adapter: Cloudflare
  output: "server",
  adapter: cloudflare(),
  vite: {
    plugins: [
      // https://tailwindcss.com/docs/installation/framework-guides/astro
      tailwindcss(),
    ],
  },
});
