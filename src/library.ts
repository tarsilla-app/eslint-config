import eslint from '@eslint/js';
import type { TSESLint } from '@typescript-eslint/utils';
import eslintImport from 'eslint-plugin-import';
import eslintJest from 'eslint-plugin-jest';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintUnusedImport from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

type Config = {
  ignores: string[];
};

function config({ ignores }: Config): TSESLint.FlatConfig.ConfigArray {
  return tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    prettierRecommended,
    {
      files: ['test/**'],
      ...eslintJest.configs['flat/recommended'],
    },
    {
      ignores,
    },
    {
      languageOptions: {
        parserOptions: {
          ecmaVersion: 2024,
          sourceType: 'module',
          project: true,
          tsconfigRootDir: './',
        },
      },
      plugins: {
        import: eslintImport,
        'unused-imports': eslintUnusedImport,
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            semi: true,
            trailingComma: 'all',
            singleQuote: true,
            printWidth: 150,
            tabWidth: 2,
          },
          {
            usePrettierrc: false,
            fileInfoOptions: {
              withNodeModules: true,
            },
          },
        ],
        ...eslintImport.configs.recommended.rules,
        ...eslintImport.configs.typescript.rules,
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        'unused-imports/no-unused-imports-ts': 'error',
        'unused-imports/no-unused-vars-ts': [
          'error',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
        'sort-imports': [
          'error',
          {
            ignoreCase: true,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
          },
        ],
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
            ],
            pathGroupsExcludedImportTypes: ['react'],
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
  );
}

export default config;
