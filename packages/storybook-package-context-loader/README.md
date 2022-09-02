# storybook-package-context-loader

Webpack loader to automatically inject storybook parameters to contextualize the containing package for `.stories.tsx` files

Using this webpack loader on your stories will add a storybook parameter `packageContext` which has the following information:

- `pkgJson` Json object of closest package.json if available
- `readme` Raw string of contents of package `README.md` if available
- `changelog` Raw string of contents of package `CHANGELOG.md` if available

# Usage

Note: this loader will only work typescript files (sorry javascript users)


## Installation
```

npm install storybook-package-context-loader

```

## Add webpack loader to storybook main.js file
Add the webpack loader to your `.storybook/main.js` file under `webpackFinal`:

```
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.stories\.tsx$/,
      use: [require.resolve("storybook-package-context-loader")],
    });
    return config;
  },
```

## Add Base Docs page to preview.js
This package bundles along a lightweight react component to display package information on the `Docs` page in storybook using the injected parameter. In order to take advantage, replace your docs page in the `.storybook/preview.js` file:

```
import DocsPage from 'storybook-package-context-loader/dist/package-context-docs-page'
export const parameters = {
  docs: {
    page: DocsPage,
  },
};
```
