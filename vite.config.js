import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // 打包输出文件夹
    assetsDir: "assets", // 静态资源存放目录
    minify: isProduction ? "esbuild" : false, // 生产环境使用 esbuild 压缩
    sourcemap: !isProduction, // 只在开发环境下生成 sourcemap
    esbuild: {
      drop: isProduction ? ["console", "debugger"] : [], // 生产环境移除 console 和 debugger
    },
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name]-[hash].js", // 代码分割后的文件名格式
        entryFileNames: "js/[name]-[hash].js", // 入口文件名格式
        assetFileNames: "assets/[name]-[hash].[ext]", // 静态资源文件名格式
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // 将 node_modules 中的依赖打包到 vendor
            if (id.includes("react") || id.includes("react-dom")) {
              return "vendor-react";
            }
            if (id.includes("lodash")) {
              return "vendor-lodash";
            }
            return "vendor";
          }
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "lodash"], // 预构建的依赖
  },
  server: {
    port: 3000, // 开发服务器端口号
    open: true, // 启动开发服务器时自动在浏览器中打开页面
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
});
