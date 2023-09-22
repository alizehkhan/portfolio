import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react-swc'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslint(), mdx(), react(), splitVendorChunkPlugin()],
})
