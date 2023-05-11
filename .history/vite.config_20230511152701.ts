/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'istanbul',
      exclude: ['**/node_modules/**', '**/tests/**'],
      include: ['**/src/**'],
      reporter: ['json-summary'],
    }

  }
})
