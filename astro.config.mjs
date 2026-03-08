// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import favicons from 'astro-favicons';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://tonyvila.github.io',
  base: '/cora-experiments',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !page.includes('/proposal/'),
    }),
    favicons({
      name: 'Cora',
      short_name: 'Cora',
    }),
  ],
});
