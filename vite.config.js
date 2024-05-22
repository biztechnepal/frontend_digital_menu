import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  emptyOutDir: true,
  plugins: [react()],
  define: {
    "process.env": {},
  },
  server: {
    watch: {
      usePolling: false,
      interval: 100,
      proxy: {
        "/api": {
          target: "https://hpmt.net",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  },
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://qrmenu.gorkhab.com:877",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
});
