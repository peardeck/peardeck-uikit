module.exports = {
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    // Default ident is 4, we use 2
    // note you must disable the base rule as it can report incorrect errors
    indent: "off",
    "@typescript-eslint/indent": ["error", 2],

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
      files: ["*.spec.tsx", "*.stories.tsx"],
      rules: {
        // Allow importing devDependencies
        "import/no-extraneous-dependencies": "off",

        // This is unnecessary and overkill for specs and stories
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
  ],
};
