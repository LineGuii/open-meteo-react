import alias from '@rollup/plugin-alias';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        {
          find: '@ui',
          replacement: resolve(projectRootDir, 'src/ui'),
        },
        {
          find: '@pages',
          replacement: resolve(projectRootDir, 'src/pages'),
        },
        {
          find: '@api',
          replacement: resolve(projectRootDir, 'src/api'),
        },
        {
          find: '@store',
          replacement: resolve(projectRootDir, 'src/store'),
        },
      ],
    }),
  ],
});
