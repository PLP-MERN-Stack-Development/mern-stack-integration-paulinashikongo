import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,                 // optional but nice to be explicit
    proxy: {
      '/api': 'http://127.0.0.1:5000'  // use 127.0.0.1 to avoid localhost quirks
    }
  }
})





