import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/index.ts", "src/functions/index.ts", "src/constants/index.ts"], 
  format: ["esm", "cjs"],
  dts: true, 
  minify: true, 
  external: ["react"], 
  clean: true,
  ...options,
}));
