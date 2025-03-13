import type { TSESLint } from '@typescript-eslint/utils';
import { config, configs } from 'typescript-eslint';

const javascriptConfig: TSESLint.FlatConfig.ConfigArray = config({
  files: ['**/*.{cjs,mjs,js,jsx}'],
  extends: [configs.disableTypeChecked],
});

export { javascriptConfig };
