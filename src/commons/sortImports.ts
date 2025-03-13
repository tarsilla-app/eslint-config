import type { TSESLint } from '@typescript-eslint/utils';
import { config } from 'typescript-eslint';

const sortImportsConfig: TSESLint.FlatConfig.ConfigArray = config({
  rules: {
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
  },
});

export { sortImportsConfig };
