import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: ['**/src/assets/ROM_ABV_KLEUR_DEF.tif'],
    },
  },
})
