declare module 'eslint-plugin-jest' {
  import type { TSESLint } from '@typescript-eslint/utils';
  type Configs = {
    'flat/recommended': TSESLint.FlatConfig.ConfigArray;
  };
  const plugin: TSESLint.FlatConfig.Plugin & { configs: Configs };
  export default plugin;
}
