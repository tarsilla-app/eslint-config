import type { TSESLint } from '@typescript-eslint/utils';
import reactHooks from 'eslint-plugin-react-hooks';
import { config } from 'typescript-eslint';

const reactHooksConfig: TSESLint.FlatConfig.ConfigArray = config({
  files: ['**/*.{jsx,tsx}'],
  plugins: {
    'react-hooks': reactHooks,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
});

export { reactHooksConfig };
