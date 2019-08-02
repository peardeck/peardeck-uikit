
# Tools used by peardeck-uikit

The project uses a variety of tools, and it's not always immediately clear what their purpose is.

## [Yarn](https://yarnpkg.com)

Yarn is used for package management. The [workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) feature is used to manage the multi-package architecture used. With workspaces, Yarn can "hoist" shared packages to a root level `node_modules` directory, cross-linking them as needed. It also appropriate links dependencies between packages within the monorepo itself.

## [Lerna](https://lerna.js.org/)

Lerna works on top of Yarn Workspaces to provide some useful utility commands and additional functionality. For example:

* Commands are run concurrently by default (while taking into account dependencies between packages)

* [Filter support](https://www.npmjs.com/package/@lerna/filter-options) - Ability to run commands against packages filtered by glob patterns. For example: `lerna run --scope @peardeck-uikit/ui-* build` would run the build script only on packages that start with the string "ui-".

* Useful commands for publishing packages to NPM (i.e. [`lerna publish`](https://github.com/lerna/lerna/tree/master/commands/publish#readme) and [`lerna changed`](https://github.com/lerna/lerna/tree/master/commands/changed#readme))

* `lerna run <script>` runs `<script>` in every package that _defines_ it. If a package doesn't define that script in it's `package.json`'s `scripts` section, it is simply skipped. Yarn, on the other hand, _requires_ that every package define a script with that name. So `yarn workspaces run <script>` causes an error if the script is not defined in a package.

[Lerna Documentation and command reference](https://github.com/lerna/lerna#readme)

### [Husky](https://github.com/typicode/husky)

"Git hooks made easy". Husky automatically creates git hooks so that we can do things like make sure linting and [prettier](#Prettier) are run automatically when doing a `git commit`.

Normally, git hooks must be manually installed after cloning a repo, and can often be platform-specific. Husky takes care of these problems automatically.

### [Prettier](https://www.npmjs.com/package/prettier)

Automatically formats code to enforce style consistencies throughout the codebase.

## [lint-staged](https://github.com/okonet/lint-staged)

Used to linters only on git staged files (in conjunction with a [Husky](#Husky) `precommit` hook, `eslint` and [`prettier`](#Prettier)). This reduces the time that linting/formatting takes by unnecessarily linting files that haven't been changed or aren't intended to be commited.

## [rimraf](https://www.npmjs.com/package/rimraf)

Removes an entire directory and any files or directories contained within it (i.e. `rm -rf`). Used mostly by `clean` scripts to purge an entire build directory so a clean build can then be performed that won't have any unused files that may have been left over from a previous build.
