import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend'; //用于给setup script组建增加name属性
import viteEslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    vue(),
    /* https://www.npmjs.com/package/vite-plugin-eslint */
    viteEslint(),
    VueSetupExtend()
  ]
});
