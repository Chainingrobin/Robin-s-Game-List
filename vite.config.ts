import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Manually load environment variables
import dotenv from 'dotenv'
dotenv.config()

export default defineConfig({
  base: '/Robin-s-Game-List/',
  plugins: [react()],
})
