import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), mdx(), prefetch(), react()]
});