import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import ImportMetaEnvPlugin from "@import-meta-env/unplugin";

export default defineConfig({
  plugins: [
    react(),
    ImportMetaEnvPlugin.vite({
      example: ".env.example",
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      },
      '/world': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      },
      '/manifests': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
