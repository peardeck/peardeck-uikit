module.exports = {
  stories: [
    "./guide/**/*.mdx",
    "../**/dist/**/*.stories.(js|tsx|mdx)",
    "../**/dist/**/stories.(js|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-docs/preset",
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport",
  ],
};
