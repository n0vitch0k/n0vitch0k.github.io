import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' : le site fonctionne sous n'importe quel chemin (GitHub Pages, Netlify, VPS…)
export default defineConfig({
  plugins: [react()],
  base: './',
});
