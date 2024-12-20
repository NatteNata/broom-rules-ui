import { join, resolve } from 'node:path'
import path from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import { dependencies, devDependencies } from './package.json'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, join('src', 'index.ts')),
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    minify: false,
    rollupOptions: {
      // Exclude peer dependencies from the bundle to reduce bundle size
      external: [
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
        'react/jsx-runtime',
      ],
      output: {
        dir: 'dist',
        entryFileNames: '[name].cjs',
        format: 'cjs',
      },
    },
    target: 'esnext',
  },
  plugins: [
    react(),
    dts({ rollupTypes: true }), // Output .d.ts files
  ],
  /*resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Single alias for the entire `src` directory
    },
  },*/
})
