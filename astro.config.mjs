import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://annaviper.github.io',
    output: 'static',
    outDir: './docs',
    build: {
        assets: 'astro'
    }
});
