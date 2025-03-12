declare module 'eslint-plugin-react-hooks' {
  import type { TSESLint } from '@typescript-eslint/utils';
  type Configs = {
    recommended: TSESLint.FlatConfig.Config;
  };
  const plugin: TSESLint.FlatConfig.Plugin & { configs: Configs };
  export default plugin;
}
