import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  emptyOutDir: true ,
  plugins: [react()],
  define:{
    'process.env': {}
  },
  // server:{
  //   hmr:{
  //     overlay:false
  //   }
  // }
})
