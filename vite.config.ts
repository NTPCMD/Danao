import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Use relative asset paths so the site renders correctly when served from a subdirectory
  // or opened via the file protocol.
  base: './',
});
