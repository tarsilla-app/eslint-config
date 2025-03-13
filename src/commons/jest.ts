import type { TSESLint } from '@typescript-eslint/utils';
import jest from 'eslint-plugin-jest';
import { config } from 'typescript-eslint';

const jestConfig: TSESLint.FlatConfig.ConfigArray = config({
  files: ['**/*.test.{js,ts,jsx,tsx}'],
  ...jest.configs['flat/recommended'],
});

export { jestConfig };
