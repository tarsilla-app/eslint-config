/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-imports-ts */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/default */
/* eslint-disable import/namespace */
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const config = [
  {
    input: 'src/library.ts',
    output: [
      {
        file: 'lib/library.cjs',
        format: 'cjs',
        sourcemap: true,
        exports: 'auto',
      },
      {
        file: 'lib/library.esm',
        format: 'esm',
        sourcemap: true,
        exports: 'auto',
      },
    ],
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' }), json(), terser()],
  },
  {
    input: './src/library.ts',
    output: [{ file: './lib/library.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
  {
    input: 'src/react.ts',
    output: [
      {
        file: 'lib/react.cjs',
        format: 'cjs',
        sourcemap: true,
        exports: 'auto',
      },
      {
        file: 'lib/react.esm',
        format: 'esm',
        sourcemap: true,
        exports: 'auto',
      },
    ],
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' }), json(), terser()],
  },
  {
    input: './src/react.ts',
    output: [{ file: './lib/react.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];

export default config;
