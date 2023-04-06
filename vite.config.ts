import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteRestart from 'vite-plugin-restart'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    watch: {
      usePolling: true,
    }
  },
});