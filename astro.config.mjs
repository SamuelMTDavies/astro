import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';
import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import { SITE } from './src/config.mjs';
import alpinejs from "@astrojs/alpinejs";
import compressor from "astro-compressor";
const env = loadEnv("", process.cwd(), 'STORYBLOK');
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const whenExternalScripts = (items = []) => SITE.googleAnalyticsId ? Array.isArray(items) ? items.map(item => item()) : [items()] : [];


// https://astro.build/config
export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  output: 'static',
  //output: 'server',

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin]
  },
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), sitemap(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), mdx(), storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      // Add your components here
      HubPost: 'storyblok/HubPost',
      HubPostList: 'storyblok/HubPostList',
      page: 'storyblok/Page'
    },
    apiOptions: {
      // Choose your Storyblok space region
      region: 'eu'
    }
  }), ...whenExternalScripts(() => partytown({
    config: {
      forward: ['dataLayer.push']
    }
  })), compress({
    css: true,
    html: {
      removeAttributeQuotes: false
    },
    img: false,
    js: true,
    svg: false,
    logger: 1
  }), alpinejs(), compressor({ gzip: false, brotli: true })],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  }
});