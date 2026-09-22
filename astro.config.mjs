import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Para GitHub Pages se sirve en `https://<usuario>.github.io/<repo>/`.
// Si el repo se llama igual que tu usuario (sitio de usuario), deja
// `base: '/'`. Si es un repo de proyecto, cambia a `base: '/<repo>/'`.
export default defineConfig({
  integrations: [tailwind()],
  base: '/mariela/',
  trailingSlash: 'ignore',
  server: {
    host: true,
    port: 4321
  }
});
