// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import VueRouter from "file:///D:/alex/frontend/masterclass2024/vuejs-masterclass-2024/node_modules/unplugin-vue-router/dist/vite.js";
import Components from "file:///D:/alex/frontend/masterclass2024/vuejs-masterclass-2024/node_modules/unplugin-vue-components/dist/vite.js";
import { defineConfig } from "file:///D:/alex/frontend/masterclass2024/vuejs-masterclass-2024/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/alex/frontend/masterclass2024/vuejs-masterclass-2024/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///D:/alex/frontend/masterclass2024/vuejs-masterclass-2024/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import autoprefixer from "file:///D:/alex/frontend/masterclass2024/vuejs-masterclass-2024/node_modules/autoprefixer/lib/autoprefixer.js";
import tailwind from "file:///D:/alex/frontend/masterclass2024/vuejs-masterclass-2024/node_modules/tailwindcss/lib/index.js";
import AutoImport from "file:///D:/alex/frontend/masterclass2024/vuejs-masterclass-2024/node_modules/unplugin-auto-import/dist/vite.js";
import { VueRouterAutoImports } from "file:///D:/alex/frontend/masterclass2024/vuejs-masterclass-2024/node_modules/unplugin-vue-router/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///D:/alex/frontend/masterclass2024/vuejs-masterclass-2024/vite.config.ts";
var vite_config_default = defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  plugins: [
    VueRouter(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("iconify-icon")
        }
      }
    }),
    vueDevTools(),
    Components({
      dirs: ["src/components"],
      extensions: ["vue"],
      deep: true,
      dts: true
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/,
        // .vue
        /\.md$/
        // .md
      ],
      imports: [
        "vue",
        VueRouterAutoImports,
        {
          pinia: ["defineStore", "storeToRefs", "acceptHMRUpdate"]
        }
      ],
      dts: true,
      viteOptimizeDeps: true,
      dirs: ["src/stores"]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "@root": fileURLToPath(new URL("./", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxhbGV4XFxcXGZyb250ZW5kXFxcXG1hc3RlcmNsYXNzMjAyNFxcXFx2dWVqcy1tYXN0ZXJjbGFzcy0yMDI0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxhbGV4XFxcXGZyb250ZW5kXFxcXG1hc3RlcmNsYXNzMjAyNFxcXFx2dWVqcy1tYXN0ZXJjbGFzcy0yMDI0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9hbGV4L2Zyb250ZW5kL21hc3RlcmNsYXNzMjAyNC92dWVqcy1tYXN0ZXJjbGFzcy0yMDI0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnO1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyL3ZpdGUnO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scyc7XG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcic7XG5pbXBvcnQgdGFpbHdpbmQgZnJvbSAndGFpbHdpbmRjc3MnO1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSc7XG5pbXBvcnQgeyBWdWVSb3V0ZXJBdXRvSW1wb3J0cyB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXInO1xuXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFt0YWlsd2luZCgpLCBhdXRvcHJlZml4ZXIoKV0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIFZ1ZVJvdXRlcigpLFxuICAgIHZ1ZSh7XG4gICAgICB0ZW1wbGF0ZToge1xuICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcbiAgICAgICAgICBpc0N1c3RvbUVsZW1lbnQ6ICh0YWcpID0+IHRhZy5zdGFydHNXaXRoKCdpY29uaWZ5LWljb24nKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgdnVlRGV2VG9vbHMoKSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIGRpcnM6IFsnc3JjL2NvbXBvbmVudHMnXSxcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJ10sXG4gICAgICBkZWVwOiB0cnVlLFxuICAgICAgZHRzOiB0cnVlLFxuICAgIH0pLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW5jbHVkZTogW1xuICAgICAgICAvXFwuW3RqXXN4PyQvLCAvLyAudHMsIC50c3gsIC5qcywgLmpzeFxuICAgICAgICAvXFwudnVlJC8sXG4gICAgICAgIC9cXC52dWVcXD92dWUvLCAvLyAudnVlXG4gICAgICAgIC9cXC5tZCQvLCAvLyAubWRcbiAgICAgIF0sXG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgICd2dWUnLFxuICAgICAgICBWdWVSb3V0ZXJBdXRvSW1wb3J0cyxcbiAgICAgICAge1xuICAgICAgICAgIHBpbmlhOiBbJ2RlZmluZVN0b3JlJywgJ3N0b3JlVG9SZWZzJywgJ2FjY2VwdEhNUlVwZGF0ZSddLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGR0czogdHJ1ZSxcbiAgICAgIHZpdGVPcHRpbWl6ZURlcHM6IHRydWUsXG4gICAgICBkaXJzOiBbJ3NyYy9zdG9yZXMnXSxcbiAgICB9KSxcbiAgXSxcblxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgJ0Byb290JzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuLycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVcsU0FBUyxlQUFlLFdBQVc7QUFDcFksT0FBTyxlQUFlO0FBQ3RCLE9BQU8sZ0JBQWdCO0FBRXZCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLGNBQWM7QUFDckIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyw0QkFBNEI7QUFWMEwsSUFBTSwyQ0FBMkM7QUFhaFIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLElBQUk7QUFBQSxNQUNGLFVBQVU7QUFBQSxRQUNSLGlCQUFpQjtBQUFBLFVBQ2YsaUJBQWlCLENBQUMsUUFBUSxJQUFJLFdBQVcsY0FBYztBQUFBLFFBQ3pEO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsWUFBWTtBQUFBLElBQ1osV0FBVztBQUFBLE1BQ1QsTUFBTSxDQUFDLGdCQUFnQjtBQUFBLE1BQ3ZCLFlBQVksQ0FBQyxLQUFLO0FBQUEsTUFDbEIsTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsU0FBUztBQUFBLFFBQ1A7QUFBQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUE7QUFBQSxRQUNBO0FBQUE7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPLENBQUMsZUFBZSxlQUFlLGlCQUFpQjtBQUFBLFFBQ3pEO0FBQUEsTUFDRjtBQUFBLE1BQ0EsS0FBSztBQUFBLE1BQ0wsa0JBQWtCO0FBQUEsTUFDbEIsTUFBTSxDQUFDLFlBQVk7QUFBQSxJQUNyQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxNQUNwRCxTQUFTLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLElBQ3ZEO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
