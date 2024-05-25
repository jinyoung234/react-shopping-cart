import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import svgr from 'vite-plugin-svgr';

<<<<<<< HEAD
const BASE_URL = process.env.NODE_ENV === 'production' ? '/react-shopping-cart/dist/' : '/';
=======
const BASE_URL = process.env.NODE_ENV === 'production' ? '/react-shopping-cart/' : '/';
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), EnvironmentPlugin('all')],
  envPrefix: 'VITE_',
  base: BASE_URL,
  resolve: {
    alias: [
      { find: '@src', replacement: resolve(__dirname, 'src') },
      { find: '@components', replacement: resolve(__dirname, 'src/components') },
      { find: '@styles', replacement: resolve(__dirname, 'src/styles') },
      { find: '@assets', replacement: resolve(__dirname, 'src/assets') },
      { find: '@constants', replacement: resolve(__dirname, 'src/constants') },
      { find: '@utils', replacement: resolve(__dirname, 'src/utils') },
      { find: '@hooks', replacement: resolve(__dirname, 'src/hooks') },
      { find: '@routes', replacement: resolve(__dirname, 'src/routes') },
      { find: '@pages', replacement: resolve(__dirname, 'src/pages') },
      { find: '@apis', replacement: resolve(__dirname, 'src/apis') },
      { find: '@appTypes', replacement: resolve(__dirname, 'src/appTypes') },
      { find: '@errors', replacement: resolve(__dirname, 'src/errors') },
      { find: '@recoil', replacement: resolve(__dirname, 'src/recoil') },
<<<<<<< HEAD
=======
      { find: '@domain', replacement: resolve(__dirname, 'src/domain') },
      { find: '@validation', replacement: resolve(__dirname, 'src/validation') },
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
    ],
  },
});
