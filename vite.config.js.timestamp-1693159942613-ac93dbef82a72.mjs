// vite.config.js
import react from "file:///C:/Users/h2s0_/like-lion/react-page/node_modules/.pnpm/@vitejs+plugin-react@4.0.4_vite@4.4.9/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "node:path";
import { defineConfig } from "file:///C:/Users/h2s0_/like-lion/react-page/node_modules/.pnpm/vite@4.4.9/node_modules/vite/dist/node/index.js";
import { env } from "node:process";
var __vite_injected_original_dirname = "C:\\Users\\h2s0_\\like-lion\\react-page";
var idDev = env.NODE_ENV === "development";
var vite_config_default = defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: idDev ? "[name]_[local]__[hash:base64:5]" : "[hash:base64:4]"
    }
  },
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxoMnMwX1xcXFxsaWtlLWxpb25cXFxccmVhY3QtcGFnZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcaDJzMF9cXFxcbGlrZS1saW9uXFxcXHJlYWN0LXBhZ2VcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2gyczBfL2xpa2UtbGlvbi9yZWFjdC1wYWdlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcIm5vZGU6cGF0aFwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgeyBlbnYgfSBmcm9tIFwibm9kZTpwcm9jZXNzXCI7XHJcblxyXG5jb25zdCBpZERldiA9IGVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgY3NzOiB7XHJcbiAgICBkZXZTb3VyY2VtYXA6IHRydWUsXHJcbiAgICBtb2R1bGVzOiB7XHJcbiAgICAgIGdlbmVyYXRlU2NvcGVkTmFtZTogaWREZXZcclxuICAgICAgICA/IFwiW25hbWVdX1tsb2NhbF1fX1toYXNoOmJhc2U2NDo1XVwiXHJcbiAgICAgICAgOiBcIltoYXNoOmJhc2U2NDo0XVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFxUyxPQUFPLFdBQVc7QUFDdlQsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsV0FBVztBQUhwQixJQUFNLG1DQUFtQztBQUt6QyxJQUFNLFFBQVEsSUFBSSxhQUFhO0FBRy9CLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixLQUFLO0FBQUEsSUFDSCxjQUFjO0FBQUEsSUFDZCxTQUFTO0FBQUEsTUFDUCxvQkFBb0IsUUFDaEIsb0NBQ0E7QUFBQSxJQUNOO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUNqQztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
