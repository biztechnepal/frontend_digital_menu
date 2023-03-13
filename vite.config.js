import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  // Define the public directory for your project
  publicDir: '../public',
  server: {
    open: '/index.html',
  },
  plugins: [react()]
})
