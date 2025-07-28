/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    proxy: {
      "/api": "http://localhost:8080",
      "/graphql": "http://localhost:8080",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
