import js from '@eslint/js';
import type { TSESLint } from '@typescript-eslint/utils';
import { config, configs } from 'typescript-eslint';

const allConfig: TSESLint.FlatConfig.ConfigArray = config([
  js.configs.recommended,
  ...configs.stylistic,
  ...configs.stylisticTypeChecked,
  {
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
]);

export { allConfig };
