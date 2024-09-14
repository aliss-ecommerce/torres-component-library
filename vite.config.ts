import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { peerDependencies } from "./package.json";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      types: "/src/types",
      components: "/src/components",
    },
  },
  build: {
    lib: {
      entry: "./src/index.ts", // Especifica el punto de entrada
      name: "vite-react-ts-button", // Establece el nombre de la biblioteca generada.
      fileName: (format) => `index.${format}.js`, // Genera el nombre del archivo de salida según el formato.
      formats: ["cjs", "es"], // Especifica los formatos de salida (módulos CommonJS y ES).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // Define dependencias externas para rollup.\
    },
    sourcemap: true, // Genera sourcemaps para depurar.
    emptyOutDir: true, // Borra el directorio de salida antes de compilar.
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/style.scss";
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');`,
      },
    },
  },
});
