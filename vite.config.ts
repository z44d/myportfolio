import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // "/" by default (localhost + custom domains). CI overrides this with
  // VITE_BASE_PATH only when deploying to GitHub Pages project pages.
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
});
