import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-swc';
import terser from '@rollup/plugin-terser';
import { dts } from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

function build({ folder = '' } = {}) {
  const _folder = folder.trim().length > 0 ? `${folder}/` : folder;
  return [
    {
      input: `src/${_folder}index.ts`,
      output: [
        {
          file: `lib/${_folder}index.cjs`,
          format: 'cjs',
          sourcemap: true,
          exports: 'auto',
        },
        {
          file: `lib/${_folder}index.mjs`,
          format: 'esm',
          sourcemap: true,
          exports: 'auto',
        },
      ],
      external: ['globals'],
      plugins: [
        peerDepsExternal({ includeDependencies: true }),
        nodeResolve({ extensions: ['.ts'] }),
        commonjs({ exclude: 'node_modules/**' }),
        typescript({
          jsc: {
            parser: {
              syntax: 'typescript',
            },
          },
        }),
        terser(),
      ],
    },
    {
      input: `./src/${_folder}index.ts`,
      output: [{ file: `./lib/${_folder}index.d.ts`, format: 'esm' }],
      external: ['globals'],
      plugins: [dts()],
    },
  ];
}

export default [
  ...build(),
  ...build({ folder: 'library' }),
  ...build({ folder: 'next' }),
  ...build({ folder: 'react' }),
];
