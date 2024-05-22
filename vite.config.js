import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  emptyOutDir: true,
  plugins: [react()],
  define: {
    // __DEFINES__: {
    //   API_URL: "https://qrmenu.gorkhab.com:878", // Define API_URL with a specific value
    // },
    "process.env": {},
  },
  server: {
    proxy: {
      "/api": {
        target: "https://qrmenu.gorkhab.com:877",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  // server: {
  //   hmr: {
  //     overlay: false,
  //   },
  // },
});
