import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  server: {
    host: '0.0.0.0',  // Allows access from other devices on the local network
    port: 3000        // You can change the port if needed
  },
  plugins: [react()],
});
