import type { TSESLint } from '@typescript-eslint/utils';
import { config } from 'typescript-eslint';

import {
  allConfig,
  importsConfig,
  javascriptConfig,
  jestConfig,
  prettierConfig,
  sortImportsConfig,
  unusedImportsConfig,
} from '../commons/index.js';
import { EslintOptions } from '../types/index.js';

function eslintLibraryConfig({ ignores }: EslintOptions): TSESLint.FlatConfig.ConfigArray {
  return config(
    ...config({
      ignores,
    }),
    ...allConfig,
    ...unusedImportsConfig,
    ...sortImportsConfig,
    ...importsConfig,
    ...javascriptConfig,
    ...jestConfig,
    ...prettierConfig,
  );
}

export { eslintLibraryConfig };
