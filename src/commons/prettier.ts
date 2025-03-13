import type { TSESLint } from '@typescript-eslint/utils';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import { config } from 'typescript-eslint';

const prettierConfig: TSESLint.FlatConfig.ConfigArray = config([
  prettierRecommended,
  {
    rules: {
      ...prettierRecommended.rules,
      'prettier/prettier': [
        'error',
        {
          semi: true,
          trailingComma: 'all',
          singleQuote: true,
          jsxSingleQuote: true,
          printWidth: 120,
          tabWidth: 2,
        },
        {
          usePrettierrc: false,
          fileInfoOptions: {
            withNodeModules: true,
          },
        },
      ],
    },
  },
]);

export { prettierConfig };
