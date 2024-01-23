import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/wwwroot": {
        target: "https://www.pushu.live",
        changeOrigin: true, //必须要开启跨域
        rewrite: (path) => path.replace(/\/wwwroot/, ""), // 路径重写
      },
    },
  }
})
