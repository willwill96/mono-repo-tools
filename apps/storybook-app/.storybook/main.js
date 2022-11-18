module.exports = {
  stories: [
    "../../../**/*.stories.mdx",
    "../../../**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "storybook-addon-package-shopping-cart",
      options: {
        packageContextLoaderOptions: {
          enableReadme: true,
          enableChangelog: true
        },
      }
    }
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  }
};
