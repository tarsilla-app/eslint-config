import js from '@eslint/js';
import type { TSESLint } from '@typescript-eslint/utils';
import globals from 'globals';
import { config, configs } from 'typescript-eslint';

const allConfig: TSESLint.FlatConfig.ConfigArray = config([
  js.configs.recommended,
  ...configs.stylistic,
  ...configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: true,
        tsconfigRootDir: './',
      },
      globals: {
        ...globals.builtin,
        ...globals.es2021,
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
]);

export { allConfig };
