import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const config = [
  {
    input: `src/index.ts`,
    output: [
      {
        file: `lib/index.cjs`,
        format: 'cjs',
        sourcemap: true,
        exports: 'auto',
      },
      {
        file: `lib/index.mjs`,
        format: 'esm',
        sourcemap: true,
        exports: 'auto',
      },
    ],
    external: ['globals'],
    plugins: [peerDepsExternal({ includeDependencies: true }), typescript({ tsconfig: './tsconfig.json' }), terser()],
  },
  {
    input: `./src/index.ts`,
    output: [{ file: `./lib/index.d.ts`, format: 'esm' }],
    plugins: [dts()],
  },
];

export default config;
