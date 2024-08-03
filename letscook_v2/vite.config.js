import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
//import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        recipes: resolve(__dirname, 'recipes/index.html'),
        dashboard: resolve(__dirname, 'dashboard/index.html'),
      },
    },
  },
})
