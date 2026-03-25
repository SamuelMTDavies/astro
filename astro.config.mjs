import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';
import { SITE } from './src/config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  output: 'static',

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
  },
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    // sitemap(),
    mdx(),
    react(),
  ],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
    build: {
      rollupOptions: {
        external: [/^virtual:storyblok/, /^virtual:image/],
      },
    },
  },
});
