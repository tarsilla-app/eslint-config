import type { TSESLint } from '@typescript-eslint/utils';
import unusedImports from 'eslint-plugin-unused-imports';
import { config } from 'typescript-eslint';

const unusedImportsConfig: TSESLint.FlatConfig.ConfigArray = config({
  plugins: {
    'unused-imports': unusedImports,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
});

export { unusedImportsConfig };
