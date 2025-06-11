import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      src: path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".jsx", ".json", ".mjs"],
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-i18next"],
  },
  build: {
    chunkSizeWarningLimit: 3000,
  },
});
