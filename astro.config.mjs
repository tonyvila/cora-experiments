// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import posthog from 'astro-posthog';
import favicons from 'astro-favicons';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.cora.st',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !page.includes('/proposal/'),
    }),
    posthog({
      posthogKey: 'phc_Rx2X2eA2ckkctCL6i4eOgQnYNz1Znjod8SD12NFjlNT',
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
    }),
    favicons({
      name: 'Cora',
      short_name: 'Cora',
    }),
  ],
});
