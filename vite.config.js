import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import path from 'path';

export default defineConfig({
  base: '/photographer/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    },
  },
});

