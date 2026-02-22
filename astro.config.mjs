import { defineConfig } from 'astro/config';

export default defineConfig({
  // GitHub Pages URL — update site + remove base when you switch to a custom domain
  site: 'https://abiaina.github.io',
  base: '/twas',

  // Static output — all pages rendered at build time (fastest possible load)
  output: 'static',
});
