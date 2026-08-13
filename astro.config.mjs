import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://texomastormshelters.com',
  integrations: [sitemap()],
});
