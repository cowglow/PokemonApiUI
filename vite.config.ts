import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  base:"/pokemon-api-ui",
  plugins: [svgr(),react(), checker({typescript:true})],
})
