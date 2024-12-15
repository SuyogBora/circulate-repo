import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/index.ts"],               
  format: ["esm", "cjs"],               
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
  dts: true,                            
  minify: true,                       
  external: ["react", "react-dom", "next"], 
  clean: true,                         
  splitting: false,                     
  sourcemap: true,                      
  treeshake: true,                     
  ...options,                          
}));
