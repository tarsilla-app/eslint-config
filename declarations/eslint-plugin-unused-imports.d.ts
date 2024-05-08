declare module 'eslint-plugin-unused-imports' {
  import type { TSESLint } from '@typescript-eslint/utils';
  const plugin: TSESLint.FlatConfig.Plugin;
  export default plugin;
}
