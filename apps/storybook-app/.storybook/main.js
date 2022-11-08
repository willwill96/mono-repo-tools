module.exports = {
  stories: [
    "../../../**/*.stories.mdx",
    "../../../**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-package-shopping-cart"
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  }
};
