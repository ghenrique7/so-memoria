import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    worker: {
      plugins: [react()],
    },
    build: {
      // generate manifest.json in outDir
      manifest: true,
      base: '/public/build/',
    }
})
