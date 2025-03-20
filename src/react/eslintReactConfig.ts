import type { TSESLint } from '@typescript-eslint/utils';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';
import { config } from 'typescript-eslint';

import {
  allConfig,
  importsConfig,
  javascriptConfig,
  jestConfig,
  prettierConfig,
  reactHooksConfig,
  sortImportsConfig,
  unusedImportsConfig,
} from '../commons/index.js';
import { EslintOptions } from '../types/index.js';

function eslintReactConfig({ ignores }: EslintOptions): TSESLint.FlatConfig.ConfigArray {
  return config(
    ...config({
      ignores,
      languageOptions: {
        globals: {
          ...globals.browser,
        },
      },
    }),
    ...allConfig,
    ...config({
      files: ['**/*.{jsx,tsx}'],
      ...reactPlugin.configs.flat.recommended,
      ...reactPlugin.configs.flat['jsx-runtime'],
      settings: {
        react: {
          version: 'detect',
        },
      },
    }),
    ...reactHooksConfig,
    ...unusedImportsConfig,
    ...sortImportsConfig,
    ...importsConfig,
    ...javascriptConfig,
    ...jestConfig,
    ...prettierConfig,
  );
}

export { eslintReactConfig };
