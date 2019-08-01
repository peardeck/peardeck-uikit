# @peardeck-uikit/eslint-config

An eslint configuration for use in `@peardeck-uikit` modules (or elsewhere).

This allows us to use a centralized configuration to keep our code consistent across individual packages and projects.

## Installation

1. Add `@peardeck-uikit/eslint-config` and it's peer dependencies to the project to be linted as `devDependencies`.

   For a new package in the `@peardeck-uikit` monorepo:

   ```
   cd <@peardeck-uikit-root>
   yarn run lerna add eslint@^6.0.1" --dev packages/my-new-package
   yarn run lerna add @peardeck-uikit/eslint-config --dev packages/my-new-package
   yarn run lerna add @typescript-eslint/eslint-plugin@1.12.0 --dev package/my-new-package
   yarn run lerna add eslint@6.0.1 --dev package/my-new-package
   yarn run lerna add eslint-plugin-import@2.18.0 --dev package/my-new-package
   yarn run lerna add eslint-plugin-jest@22.11.1 --dev package/my-new-package
   yarn run lerna add eslint-plugin-jsx-a11y@6.2.3 --dev package/my-new-package
   yarn run lerna add eslint-plugin-prettier@3.1.0 --dev package/my-new-package
   yarn run lerna add eslint-plugin-react@7.14. --dev package/my-new-package
   ```

   > Note: Lerna doesn't have a way to add multiple packages at once currently. We could probably come up with a bash script that could automatically check the peer depencies here and add those (airbnb-eslint does this using [`npm info "eslint-config-airbnb@latest" peerDependencies`](https://www.npmjs.com/package/eslint-config-airbnb#eslint-config-airbnb-1))

2. Create an `.eslintrc` file in the new package's root (or copy `.example.eslint`):

   ```.eslintrc
   {
     "extends": ["@peardeck-uikit/eslint-config"]
   }
   ```

3. Add linting script to your `package.json`:

   ```
   "scripts": {
       "lint": "eslint ./src --ext .ts,.tsx",
       "lint:fix": "yarn run lint --fix",
   },
   ```

## Usage

- From the package root:

  ```
  # Check files only
  yarn run lint

  # Attempt to automatically fix any errors found
  yarn run lint:fix
  ```

- From the monorepo root:

  ```
  # Check files only
  yarn lerna run lint --scope @peardeck-uikit/my-new-package

  # Attempt to fix any errors found
  yarn lerna run lint:fix --scope @peardeck-uikit/my-new-package

  ```

- Lint all packages in the monorepo that have linting scripts:

  ```
  # Check files only
  yarn lerna run lint

  # Attempt to fix any errors found
  yarn lerna run lint:fix

  ```
