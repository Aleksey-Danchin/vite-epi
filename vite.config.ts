import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [TanStackRouterVite(), viteReact()],
  resolve: {
    alias: {
      "@src": resolve(__dirname, "./src"),
    },
  },
});
