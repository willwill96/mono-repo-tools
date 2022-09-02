import DocsPage from 'storybook-package-context-loader/dist/package-context-docs-page'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    page: DocsPage,
  },
};
