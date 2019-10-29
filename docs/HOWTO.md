# Create a new module

TODO

# Add a dependency to a package

This can be accomplished in multiple ways.

- Using `yarn` from the project root directory:

  > NOTE: This will not work when adding dependencies between two packages within the project itself. For that, use the lerna method, below.

  ```
  # from ./peardeck-uikit/
  yarn workspace @peardeck/my-package add the-dependency

  # As a dev dependency
  yarn workspace @peardeck/my-package add --dev the-dependency
  ```

- Using `yarn` from the package directory:

  ```
  # from ./peardeck-uikit/packages/my-package
  yarn add the-dependency

  # As a dev dependency
  yarn add --dev the-dependency
  ```

- Using lerna from the project root directory:

  ```
  # from ./peardeck-uikit/, using the folder name
  yarn lerna add the-dependency packages/my-package

  # as a dev depdendency
  yarn lerna add the-dependency packages/my-package --dev
  ```


    # or, using the package name
    yarn lerna add the-dependency --scope=@peardeck/my-package

    # as a dev depdendency
    yarn lerna add the-dependency --scope=@peardeck/my-package --dev


    # Adding a dependency to another package within the project
    yarn lerna add @peardeck/uikit-core --scope=@peardeck/my-package --dev

    # as a dev depdendency
    yarn lerna add @peardeck/uikit-core --scope=@peardeck/my-package --dev
    ```

### What's the difference?

As noted, using yarn will not allow adding a dependency to another package within the project. However, using `yarn` provides the ability to add multiple dependencies at once to a single dependent package (but not vice-versa):

```
yarn workspace @peardeck/my-package add dependency-one dependency-two dependency-three
```

On the other hand, using `lerna` provides the ability to add a single depdendency to multiple dependeny packages at once (but not vice versa):

```
# Add `the-dependency` as a dependency of `@peardeck/uikit-core` and `@peardeck/uikit-icons` only
yarn lerna add the-dependency --scope=@peardeck/{core,icons}

# Add `the-dependency` as a dependency to ALL packages
yarn lerna add the-dependency

# Add `the-dependency` in `devDependencies` to ALL packages
yarn lerna add the-dependency
```

As well as adding depdendencies to other projects within the repo:

```
yarn lerna add @peardeck/uikit-core --scope=@peardeck/my-package
```

# Remove a package

- Using yarn from the project root:

  ```
  # from ./peardeck-uikit/
  yarn workspace @peardeck/my-package remove the-dependency
  ```

- Using yarn from the package root:

  ```
  # from ./peardeck-uikit/packages/my-package
  yarn remove the-dependency
  ```

- Manually:

  1.  Remove the dependency from the dependent package's `package.json`
  2.  Run `yarn run bootstrap` from the project root folder
