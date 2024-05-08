declare module 'eslint-plugin-import' {
  import type { TSESLint } from '@typescript-eslint/utils';
  interface Configs {
    recommended: TSESLint.FlatConfig.Config;
    typescript: TSESLint.FlatConfig.Config;
  }
  const plugin: TSESLint.FlatConfig.Plugin & { configs: Configs };
  export default plugin;
}
