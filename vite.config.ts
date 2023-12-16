import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',
    port: 3132,
    open: true,
    proxy: {
      '/api': 'http://api-driver.marsview.cc',
    },
  },
  plugins: [react()],
});
