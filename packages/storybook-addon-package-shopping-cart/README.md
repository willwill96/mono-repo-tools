# storybook-addon-package-shopping-cart

A storybook addon to assist in installing multi-package projects.

NOTE: This package is in no way affiliated with Microsoft or Fluent UI.
Fluent UI was chosen for the demo below, because it is a mature mono-repo with individually packaged components, so it can provide a good showcase for this packages functionality.

![Example](https://github.com/willwill96/mono-repo-tools/raw/master/assets/gifs/storybook-addon-package-shopping-cart.gif)

## Usage

Install with:

```

npm install -D storybook-addon-package-shopping-cart

```

Add the following to your `.storybook/main.js` file:

```

module.exports = {
  ...,
  addons: [
    ...,
    "storybook-addon-package-shopping-cart"
  ]
};

```

## Package Context Determination

This addon determines the current package by directory structure. The closest parent package.json is used for the currently active package.

Any packages without a version field or with `private: true`, will be ignored by this addon.

## Theme Configuration

The components in this plugin use built-in storybook theme values for colors by default, but you can also customize them by [providing a custom storybook theme](https://storybook.js.org/docs/react/configure/theming):

```
// .storybook/manager.js
import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
    base: 'dark',
    appContentBg: 'white',
    brandTitle: 'mono-repo-tools',
    packageShoppingCart: {
      shoppingCart: {1
        badge: {
          /* Default: props.theme.color.primary */
          bgColor: 'blue',
          /* Default: props.theme.color.defaultText */
          textColor: 'red'
        },
        addButton: {
          /* Default: props.theme.color.positive */
          bgColor: 'blue',
          /* Default: props.theme.color.defaultText */
          textColor: 'green'
        },
        removeButton: {
          /* Default: props.theme.color.negative */
          bgColor: 'green',
          /* Default: props.theme.color.defaultText */
          textColor: 'blue'
        },
        disabledButton: {
          /* Default: props.theme.color.tertiary */
          bgColor: 'green',
          /* Default: props.theme.color.inverseText */
          textColor: 'blue'
        }
      },
      quickAddButton: {
        /* Default: props.theme.color.positive */
        addIconColor: 'blue',
        /* Default: props.theme.color.negative */
        removeIconColor: 'green'
      }
    }
})

addons.setConfig({
  theme
});

```

## Configuring Install Script

By default the shopping cart will be configured to install latest versions of packages. You can configure the versions installed by configuring a global storybook parameter. See below for an example of installing the exact version:

```
// .storybook/preview.js
export const parameters = {
  packageShoppingCart: {
      determineVersionToInstall: (pkg) => {
        return `${pkg.name}@${pkg.version}`
      }
    }
};

```

## storybook-package-context-loader options

This addon uses [storybook-package-context-loader](https://www.npmjs.com/package/storybook-package-context-loader) to determine package context. By default `enableReadme` & `enableChangelog` are disabled to minimize build size. If you want to enable them, you can pass the options to the addon by adding the following to your package

```
module.exports = {
  ...,
  addons: [
    ...,
    {
      name: "storybook-addon-package-shopping-cart",
      options: {
        packageContextLoaderOptions: {
          enableReadme: true,
          enableChangelog: true
        }
      }
    }
  ]
};
```
