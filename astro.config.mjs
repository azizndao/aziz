import mdx from '@astrojs/mdx'
import prefetch from '@astrojs/prefetch'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  experimental: {
    assets: true,
    redirects: true,
  },
  integrations: [
    mdx({
      drafts: true,
    }),
    prefetch(),
    react(),
    tailwind(),
  ],
  markdown: {
    drafts: true,
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
        },
      ],
    ],
  },
  adapter: vercel(),
})
