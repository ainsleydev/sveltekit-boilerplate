/**
 * Vite configuration.
 */
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import path from 'path'

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
			// Styles in src/styles will be accessible as '@/scss/whatever.scss'
			'$lib': path.resolve('src/lib')
		}
	}
});
