module.exports = {
  globals: {},
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended",
    "plugin:import/typescript",
    "prettier",
    "prettier/react",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "import",
    "jest",
    "react",
    "prettier",
    "jsx-a11y",
  ],
  rules: {
    // IMPORTANT: When adding new rules here, please include a comment indicating
    // the reason for the exception.

    // Default ident is 4, we use 2
    // note you must disable the base rule as it can report incorrect errors
    // NOTE: this is causing problems so it's disabled for now. It seems to work
    // fine without though?
    // indent: "off",
    // "@typescript-eslint/indent": ["error", 2],

    // Normally only "jsx" is allowed but we need to allow "tsx" as well.
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],

    // This would make creating higher-order components and composition very
    // difficult, and we are mostly guarded since we're using TypeScript anyway.
    "react/jsx-props-no-spreading": "off",

    // We prefer named exports, but allow default exports.
    "import/prefer-default-export": "off",

    // This lets us ignore unused variables that start with an underscore.
    // Useful for destructuring using rest.
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        // This prevents us from having to add a return type to every
        // react component; i.e., instead of:
        //   `const MyComp: React.FunctionComponent  = (): JSX.Element => (...)`)`
        // we just do:
        //   `const MyComp: React.FunctionComponent  = () => (...)`)`
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            allowTypedFunctionExpressions: true,
          },
        ],
      },
    },
    {
      files: [
        "*.spec.ts?(x)",
        "*.test.ts?(x)",
        "*.stories.ts?(x)",
        "stories.ts?(x)",
        "knobs.ts?(x)",
        "**/stories/**/*",
        "**/story/**/*",
      ],
      // Rules override for deveopment-specific files.
      rules: {
        // Allow importing devDependencies
        "import/no-extraneous-dependencies": "off",

        // This is unnecessary and overkill for specs and stories
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
  ],
};
