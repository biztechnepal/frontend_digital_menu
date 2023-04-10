import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  emptyOutDir: true ,
  plugins: [react()],
  define: {
    'process.env': {},
    
    __DEFINES__: {
      API_BASE_URL: 'http://52.221.216.231',
      ENABLE_FEATURE_X: true,
      ENABLE_FEATURE_Y: false,
    },
  },
  // optimizeDeps:{
  //   exclude: ['@vite/client', '@vite/env'],
  // },
  base:'/menu/',
  server: {
    hmr: {
      protocol: 'ws',
      port: 3000,
    },
  },
})
