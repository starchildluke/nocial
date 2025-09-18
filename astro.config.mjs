// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	server: { port: 4323 },
	site: 'https://emptygold.blog/',
	trailingSlash: 'always',
	integrations: [mdx()],
});
