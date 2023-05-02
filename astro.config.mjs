import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // server: {
  //   host: true
  // },
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'entry.[hash].js',
          chunkFileNames: 'chunks/chunk.[hash].js',
          assetFileNames: 'assets/asset.[hash][extname]',
        },
      },
    },
  },
  build: {
    assets: 'astro' // astro instead of _astro, because the last produces erros deploying to github
  },
  integrations: [tailwind(), react()],
  // vite: {
  //   ssr: {
  //     external: ['svgo']
  //   }
  // },
  site: 'https://richi-coder.github.io'
  // base: '/richi-coder-portfolio',
});