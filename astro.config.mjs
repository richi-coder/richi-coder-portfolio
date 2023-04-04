import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: {
    host: true
  },
  integrations: [tailwind()],
  // vite: {
  //   ssr: {
  //     external: ['svgo']
  //   }
  // },
  site: 'https://richi-coder.github.io',
  // base: '/richi-coder-portfolio',
});