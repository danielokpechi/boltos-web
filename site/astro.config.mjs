import { defineConfig } from 'astro/config';

// BoltOS production marketing site — static output, clean routes.
export default defineConfig({
  site: 'https://boltos.ai',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
