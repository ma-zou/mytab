import { defineConfig } from 'vite'
import postcssNesting from 'postcss-nesting'
import atImport from 'postcss-import'
import eslint from 'vite-plugin-eslint'

export default defineConfig( {
	mode: 'development',
	css: {
		postcss: {
			plugins: [
				atImport,
				postcssNesting
			],
		},
	},
	plugins: [eslint()]
} )