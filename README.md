# mono-repo tools

Welcome! This is a mono-repo of packages to assist with building & maintaining mono-repos.


## Packages Contained

### [storybook-package-context-loader](./packages/storybook-package-context-loader)

Webpack loader for mono-repos utilizing [Storybookjs](https://storybook.js.org/) to automatically inject storybook parameters to contextualize the containing package for `.stories.tsx` files

### [storybook-addon-package-shopping-cart](./packages/storybook-addon-package-shopping-cart)

A storybook addon to assist in installing multi-package projects.

NOTE: This package is in no way affiliated with Microsoft or Fluent UI.
Fluent UI was chosen for the demo below, because it is a mature mono-repo with individually packaged components, so it can provide a good showcase for this packages functionality.

![Example](https://github.com/willwill96/mono-repo-tools/raw/master/assets/gifs/storybook-addon-package-shopping-cart.gif)