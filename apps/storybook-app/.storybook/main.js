import { mergeConfig } from 'vite';
import packageParser from './vite-plugin';

module.exports = {
  stories: ["./stories/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "storybook-addon-package-shopping-cart"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  async viteFinal(config, { configType }) {
    return {
      ...config,
      plugins: [packageParser(), ...config.plugins]
    }
  },
};