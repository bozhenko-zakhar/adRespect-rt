import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  plugins: [
    tailwindcss(),
    injectHTML(),
    FullReload(["./src/**/*.html"]),
  ],
})