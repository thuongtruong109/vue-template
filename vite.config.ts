import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import stylelint from 'vite-plugin-stylelint'
import autoImport from 'unplugin-auto-import/dist/vite.js'
import { resolve } from 'path'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'unplugin-vue-router/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VueRouter({}),
    stylelint(),
    autoImport({
      imports: ['vue', 'vue-router'],
      eslintrc: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
