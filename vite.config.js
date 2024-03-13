import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  return: {
    plugins: [
      ViteImageOptimizer ({
        /* pass your config */

        jpg: {
          quality: 60
        }
      })
    ]
  }
})
