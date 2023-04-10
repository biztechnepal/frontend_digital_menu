import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import ReactRefreshPlugin  from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/menu/',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  define: {
    'process.env': {},
    __DEFINES__: {
      API_BASE_URL: 'http://52.221.216.231',
      ENABLE_FEATURE_X: true,
      ENABLE_FEATURE_Y: false,
    },
  },
  server: {
    hmr: {
      protocol: 'ws',
      // port: 3000,gigit 
    },
  },
  // optimizeDeps:{
  //   exclude: ['@vite/client', '@vite/env'],
  // },
  // emptyOutDir: true,
  plugins: [ReactRefreshPlugin()],
})
