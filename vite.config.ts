import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Explicitly set to root for Render deployment
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});