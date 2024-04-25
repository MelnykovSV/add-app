// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig(({ mode }) => {
//   console.log('mode', mode);
//   const env = loadEnv(mode, process.cwd(), '');

//   return {
//     define: {
//       'process.env.VITE_APP_GOOGLE_MAPS_KEY': JSON.stringify(env.VITE_APP_GOOGLE_MAPS_KEY),
//     },
//     plugins: [react()],
//   };
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
