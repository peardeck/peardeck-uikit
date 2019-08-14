module.exports = {
  globals: {
    MyGlobal: true,
  },
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
  plugins: ["@typescript-eslint", "react", "jsx-a11y"],
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

    // We prefer named exports, but allow default exports.
    "import/prefer-default-export": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      // Rules override for deveopment-specific files.
      files: ["*.spec.ts?(x)", "*.stories.ts?(x)", "stories.ts?(x)"],
      rules: {
        // Allow importing devDependencies
        "import/no-extraneous-dependencies": "off",

        // This is unnecessary and overkill for specs and stories
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
  ],
};
