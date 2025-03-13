import type { TSESLint } from '@typescript-eslint/utils';
import imports from 'eslint-plugin-import';
import { config } from 'typescript-eslint';

const importsConfig: TSESLint.FlatConfig.ConfigArray = config([
  imports.flatConfigs.recommended,
  imports.flatConfigs.typescript,
  {
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
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
  },
]);

export { importsConfig };
