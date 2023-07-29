import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import basicSsl from '@vitejs/plugin-basic-ssl'


// https://astro.build/config
export default defineConfig({
  plugis: [basicSsl()],
  server: {
    https: true
  },
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
    assets: 'astro'
  },
  integrations: [tailwind(), react()],
  // vite: {
  //   ssr: {
  //     external: ['svgo']
  //   }
  // },
  site: 'https://richicoder.com/',
});