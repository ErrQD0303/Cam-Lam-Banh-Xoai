import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const args = process.argv.slice(2);
const customParam = args[0];

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env.PARAM": JSON.stringify(customParam),
  },
  plugins: [react()],
});
