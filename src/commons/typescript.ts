import type { TSESLint } from '@typescript-eslint/utils';
import { config } from 'typescript-eslint';

const typescriptConfig: TSESLint.FlatConfig.ConfigArray = config({
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: true,
      tsconfigRootDir: './',
    },
  },
});

export { typescriptConfig };
