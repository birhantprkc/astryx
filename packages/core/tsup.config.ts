import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/Button/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  clean: true,
  external: ['react', 'react-dom'],
});
