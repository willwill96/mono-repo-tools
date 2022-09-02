module.exports = {
  stories: [
    "../../../**/*.stories.mdx",
    "../../../**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.tsx$/,
      use: [require.resolve("storybook-package-context-loader")],
    });
    return config;
  },
};
