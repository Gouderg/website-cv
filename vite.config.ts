import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/website-cv/', 
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        fr: resolve(__dirname, 'fr/index.html'),
        en: resolve(__dirname, 'en/index.html'),
      },
    },
  },
});