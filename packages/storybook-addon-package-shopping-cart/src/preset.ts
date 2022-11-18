interface AddonOptions {
  packageContextLoaderOptions?: {
    enableChangelog?: boolean;
    enableReadme?: boolean;
  };
}

function managerEntries(entry = []) {
  return [...entry, require.resolve("./register")]; //👈 Addon implementation
}

module.exports = {
  managerEntries,
  webpackFinal: async (webpackConfig: any, options: AddonOptions = {}) => {
    webpackConfig.module.rules.push({
      test: /\.stories\.(t|j)sx?$/,
      use: [
        {
          loader: require.resolve("storybook-package-context-loader"),
          options: {
            enableReadme: false,
            enablePkgJson: true,
            enableChangelog: false,
            ...(options.packageContextLoaderOptions || {}),
          },
        },
      ],
    });
    return webpackConfig;
  },
};
