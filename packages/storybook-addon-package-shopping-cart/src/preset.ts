function managerEntries(entry = []) {
  return [...entry, require.resolve("./register")]; //👈 Addon implementation
}

module.exports = {
  managerEntries,
  webpackFinal: async (config: any) => {
    config.module.rules.push({
      test: /\.stories\.(t|j)sx?$/,
      use: [require.resolve("storybook-package-context-loader")],
    });
    return config;
  },
};
