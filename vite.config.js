import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const allowedHosts = [process.env.HOST].filter(Boolean);
const port = process.env.PORT || 5173;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    allowedHosts
  },
  preview: {
    host: allowedHosts[0],
    port,
    allowedHosts
  }
})
