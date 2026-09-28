import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Production builds (and `vite preview` of them) are served from GitHub Pages at /savasKamera/.
export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? '/savasKamera/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
