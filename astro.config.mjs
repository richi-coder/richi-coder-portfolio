import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // server: {
  //   host: true
  // },
  integrations: [tailwind(), react()],
  // vite: {
  //   ssr: {
  //     external: ['svgo']
  //   }
  // },
  site: 'https://richi-coder.github.io'
  // base: '/richi-coder-portfolio',
});