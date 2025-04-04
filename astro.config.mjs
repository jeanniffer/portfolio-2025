// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://jeanniffer.github.io",
  base: "portfolio-2025",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
