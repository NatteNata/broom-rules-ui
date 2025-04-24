import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { peerDependencies } from './package.json'

export default defineConfig({
	plugins: [
		react(),
		dts({
			tsconfigPath: './tsconfig.app.json',
			exclude: ['**/*.stories.ts', '**/*.test.ts'],
		}),
		tailwindcss(),
	],
	resolve: {
		alias: {
			'@': '/src',
			'@components': '/src/components',
			'@utils': '/src/utils',
			'@assets': '/src/assets',
		},
	},
	build: {
		lib: {
			entry: './src/index',
			name: '@tornata/brooms-ui',
			formats: ['es', 'cjs', 'umd'],
			fileName: format => `@tornata/brooms-ui.${format}.js`,
		},
		rollupOptions: {
			external: [...Object.keys(peerDependencies), 'react/jsx-runtime'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'react/jsx-runtime': 'jsxRuntime',
				},
			},
		},
	},
})