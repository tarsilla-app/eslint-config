# @tarsilla/eslint-config

This package provides a custom ESLint configuration built for ESLint v9. It enforces a consistent coding style and quality across Next.js, React and TypeScript library.

## Features

- **Custom Rule Sets**: Leverages recommended rules from @eslint/js, typescript-eslint, and various plugins.
- **Multiple Environments**: Offers tailored configurations for Next.js, React, and TypeScript library code.
- **Prettier**: Enforces consistent formatting with Prettier rules.
- **Unused Imports**: Detects and removes dead code using `eslint-plugin-unused-imports`.
- **Import Ordering**: Ensures a consistent and organized import structure using `eslint-plugin-import`.
- **Jest**: Ensures a consistent and organized tests using `eslint-plugin-jest`.

## Installation

Install the configuration as a development dependency:

```sh
npm install --save-dev @tarsilla/eslint-config
```

or

```sh
yarn add --dev @tarsilla/eslint-config
```

## Usage

In your ESLint configuration (see .eslintrc.mjs), add the plugin to your plugins array:

**Next.js Projects**  

```js
import { eslintNextConfig } from '@tarsilla/eslint-config/next';

export default [
  // ...other plugins...
  ...eslintNextConfig(),
];
```
**React Projects**  

```js
import { eslintReactConfig } from '@tarsilla/eslint-config/react';

export default [
  // ...other plugins...
  ...eslintReactConfig(),
];
```
**Typescript Library Projects**  

```js
import { eslintLibraryConfig } from '@tarsilla/eslint-config/library';

export default [
  // ...other plugins...
  ...eslintLibraryConfig(),
];
```

## Configuration Options

You can override default settings by creating passing options to the plugin.
The plugin accepts an object of type `EslintOptions`:

| Option   | Type   | Description                                                  | Default     |
|----------|--------|--------------------------------------------------------------|-------------|
| ignores | string array |  Array of paths to ignore during lint check. If not provided, the plugin will run in all files. | `undefined` |

Example `Next.js`:

```js
import { eslintNextConfig } from '@tarsilla/eslint-config/next';

export default [
  // ...other plugins...
  ...eslintNextConfig({
    ignores: ['**/node_modules/'],
  }),
];
```

## Contributing

Contributions are welcome! Please ensure your pull request adheres to the project's linting and testing guidelines.

## License

This project is licensed under the [MIT License](LICENSE).