This is a temporary doc to keep notes/information that need a home elsewhere.

# Script naming conventions

* Scripts names should use `lowerCamelCase`.

* Use a colon to group related scripts, i.e.:

```
{
  "scripts": {
    "test": "yarn run test:unit && yarn run test:e2e",
    "test:unit": "jest",
    "test:e2e": "...",
    "build": "yarn run build:js && yarn run build:css",
    "build:js": "...",
    "build:css": "..."
  }
}
```
`test:unit`, `test:e2e`, `build:js`, `build:css`,

Packages should follow these naming conventions for some base scripts. This will allow us to easily use a single command to run scripts across the monorepo (for example, "yarn run build" to build _all_ packages).

* `clean` - Remove any temporary files and create a "clean" environment for the package. Typically this is used to prepare a package before creating a production distribution, and includes removing any previous production build files, log files, etc.
* `build` - create a production distribution of a package
* `start` - start the package for developemnt
* `test` - run the entire test suite for a package
* `format` - run any automatic formatters (i.e. prettier) for a package
* `lint` - run any linters or formatting checks for a packages
* `precommit` - perform any precommit hooks (typically this should run `format` an `lint` scripts)
