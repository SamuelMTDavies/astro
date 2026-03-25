import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import icon from 'astro-icon';
import { storyblok } from '@storyblok/astro';
import { loadEnv } from 'vite';
import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';
import { SITE } from './src/config.mjs';

const env = loadEnv('', process.cwd(), 'STORYBLOK');
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Mock storyblok virtual modules when no token is configured
function storyblokMockPlugin() {
  return {
    name: 'storyblok-mock',
    resolveId(id) {
      if (id.includes('storyblok') && id.startsWith('virtual:')) {
        return '\0' + id;
      }
    },
    load(id) {
      if (id.includes('storyblok') && id.startsWith('\0virtual:')) {
        return 'export default {}; export const components = {}; export const storyblokComponents = {}; export const storyblokOptions = {};';
      }
    },
  };
}

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
    mdx(),
    sitemap(),
    react(),
    icon(),
    ...(env.STORYBLOK_TOKEN
      ? [
          storyblok({
            accessToken: env.STORYBLOK_TOKEN,
            components: {
              HubPost: 'storyblok/HubPost',
              HubPostList: 'storyblok/HubPostList',
              page: 'storyblok/Page',
            },
            apiOptions: {
              region: 'eu',
            },
          }),
        ]
      : []),
  ],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
    plugins: env.STORYBLOK_TOKEN ? [] : [storyblokMockPlugin()],
  },
});
