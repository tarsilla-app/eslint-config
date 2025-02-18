import js from '@eslint/js';
import type { TSESLint } from '@typescript-eslint/utils';
import imports from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import unusedImports from 'eslint-plugin-unused-imports';
import globalsImp from 'globals';
import { config, configs } from 'typescript-eslint';

import { Config } from './Config';

const globals = globalsImp as Record<string, Record<string, boolean>>;

function library({ ignores }: Config): TSESLint.FlatConfig.ConfigArray {
  return config(
    js.configs.recommended,
    imports.flatConfigs.recommended,
    imports.flatConfigs.typescript,
    ...configs.recommended,
    {
      files: ['**/*.{ts,tsx}'],
      extends: [...configs.recommendedTypeChecked],
      languageOptions: {
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          project: true,
          tsconfigRootDir: './',
        },
      },
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      files: ['**/*.test.{js,ts,jsx,tsx}'],
      ...jest.configs['flat/recommended'],
      languageOptions: {
        globals: {
          ...globals.jest,
          //...globals.vitest,
        },
      },
    },
    prettierRecommended,
    {
      ignores,
    },
    {
      plugins: {
        'unused-imports': unusedImports,
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            semi: true,
            trailingComma: 'all',
            singleQuote: true,
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

export { library };
