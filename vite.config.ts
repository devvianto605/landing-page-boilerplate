import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@assets': path.resolve('src/assets'),
      '@components': path.resolve('src/components'),
      '@configs': path.resolve('src/configs'),
      '@constants': path.resolve('src/constants'),
      '@hooks': path.resolve('src/hooks'),
      '@layouts': path.resolve('src/layouts'),
      '@pages': path.resolve('src/pages'),
      '@providers': path.resolve('src/providers'),
      '@themes': path.resolve('src/themes'),
      '@utils': path.resolve('src/utils'),
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    open: true,
  },
});
