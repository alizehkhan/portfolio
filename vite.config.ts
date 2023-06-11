import { defineConfig, splitVendorChunkPlugin } from "vite";
import eslint from "vite-plugin-eslint";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslint(), mdx(), svgr(), react(), splitVendorChunkPlugin()],
});
