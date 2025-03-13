import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import type { TSESLint } from '@typescript-eslint/utils';
import { config } from 'typescript-eslint';

import {
  allConfig,
  javascriptConfig,
  jestConfig,
  prettierConfig,
  reactHooksConfig,
  sortImportsConfig,
  typescriptConfig,
  unusedImportsConfig,
} from '../commons/index.js';
import { EslintOptions } from '../types/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

function eslintNextConfig({ ignores }: EslintOptions): TSESLint.FlatConfig.ConfigArray {
  return config(
    {
      ignores,
    },
    ...compat.config({
      extends: ['next/core-web-vitals', 'next/typescript'],
      rules: {
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '@tarsilla/**',
                group: 'internal',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react', '@tarsilla'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    }),
    ...reactHooksConfig,
    ...allConfig,
    ...unusedImportsConfig,
    ...sortImportsConfig,
    ...typescriptConfig,
    ...javascriptConfig,
    ...jestConfig,
    ...prettierConfig,
  );
}

export { eslintNextConfig };
