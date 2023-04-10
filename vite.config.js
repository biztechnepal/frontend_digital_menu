import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  emptyOutDir: true,
  base: '/menu/',
  plugins: [react()],
  define: {
      'process.env': {},
      __DEFINES__: {
        API_BASE_URL: '52.221.216.231',
        ENABLE_FEATURE_X: true,
        ENABLE_FEATURE_Y: false,
      },
  },
  // server:{
  //   hmr:{
  //     overlay:false
  //   }
  // }
})
