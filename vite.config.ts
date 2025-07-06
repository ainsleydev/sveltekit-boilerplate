/**
 * Vite configuration.
 */
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import path from 'path';

export const hash = Math.floor(Math.random() * 90000) + 10000;

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
		}),
	],
	resolve: {
		alias: {
			$lib: path.resolve(__dirname, './src/lib'),
			$utils: path.resolve(__dirname, './src/utils'),
		},
	},
	build: {
		sourcemap: true,
		rollupOptions: {
			output: {
				entryFileNames: `[name]-` + hash + `.js`,
				chunkFileNames: `[name]-` + hash + `.js`,
				assetFileNames: `[name]-` + hash + `.[ext]`,
			},
		},
	},
});
