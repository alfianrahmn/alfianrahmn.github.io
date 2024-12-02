import { defineConfig } from 'astro/config';
import 'dotenv/config'

const base = process.env.BASE ?? '/alfianrahmn.github.io';

// https://astro.build/config
export default defineConfig({
    site: 'https://alfianrahmn.github.io',
    base: base,
});
