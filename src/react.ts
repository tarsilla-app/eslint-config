import js from '@eslint/js';
import type { TSESLint } from '@typescript-eslint/utils';
import imports from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
//import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import globalsImp from 'globals';
import { config, configs } from 'typescript-eslint';

import { Config } from './Config';

const globals = globalsImp as Record<string, Record<string, boolean>>;

function react({ ignores }: Config): TSESLint.FlatConfig.ConfigArray {
  return config(
    js.configs.recommended,
    imports.flatConfigs.recommended,
    imports.flatConfigs.typescript,
    ...configs.recommended,
    ...configs.recommendedTypeChecked,
    {
      files: ['**/*.{jsx,tsx}'],
      ...reactPlugin.configs.flat.recommended,
      ...reactPlugin.configs.flat['jsx-runtime'],
      languageOptions: {
        ...reactPlugin.configs.flat.recommended.languageOptions,
        globals: {
          ...globals.serviceworker,
          ...globals.browser,
        },
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
      languageOptions: {
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          project: true,
          tsconfigRootDir: './',
        },
      },
      plugins: {
        'unused-imports': unusedImports,
        'react-hooks': reactHooks,
      },
      rules: {
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
        ...reactHooks.configs.recommended.rules,
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
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
        react: {
          version: 'detect',
        },
      },
    },
  );
}

export { react };
