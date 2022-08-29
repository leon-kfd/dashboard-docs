import { defineConfig } from "astro/config";
const base = process.env.VITE_BASE
export default defineConfig({
	base,
	site: 'https://kongfandong.cn'
});
