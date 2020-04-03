/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports = ({ config }) => {
  config.resolve.extensions.push(".ts", ".tsx");

  // eslint-disable-next-line no-param-reassign
  config.module.rules = [
    // This is a bit of a hack so that we can import .md files into our
    // .mdx and still get the appropriate storybook styling.
    // See: https://github.com/storybookjs/storybook/issues/7644#issuecomment-592536159
    {
      test: /\.md$/,
      use: ["babel-loader", "@mdx-js/loader"],
    },
    ...config.module.rules.filter((rule) => rule.test.source !== "\\.md$"),

    // Add support for Typescript.
    {
      test: /\.(ts|tsx)$/,
      use: require.resolve("babel-loader"),
    },
  ];

  return config;
};
