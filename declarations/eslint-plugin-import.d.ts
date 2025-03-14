declare module 'eslint-plugin-import' {
  import type { TSESLint } from '@typescript-eslint/utils';
  type Configs = {
    recommended: TSESLint.FlatConfig.Config;
    typescript: TSESLint.FlatConfig.Config;
  };
  const plugin: { flatConfigs: Configs };
  export default plugin;
}
