// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://nikolajjsj.com",

  vite: {
    plugins: [tailwindcss()],
  },

  // Riffle, Health Sync and Cove used to have their project page at the site
  // root, where the other fifteen have theirs under /projects. The pages moved;
  // these keep the old addresses working for anything already linking to them.
  //
  // Their privacy policies deliberately did *not* move — those stayed at
  // /<app>/privacy-policy, which is the address filed with App Store Connect.
  redirects: {
    "/riffle": "/projects/riffle",
    "/health-sync": "/projects/health-sync",
    "/cove": "/projects/cove",
  },

  integrations: [mdx(), sitemap()],
});

