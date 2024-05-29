import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import MillionLint from '@million/lint'; // Upewnij się, że biblioteka jest zainstalowana
import path from 'path';

export default defineConfig({
  plugins: [
    MillionLint.vite(), // Dodanie pluginu MillionLint przed pluginem react
    react(),            // Plugin react dla obsługi React
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Alias do katalogu src
    }
  },
  base: '/'
});