# storybook-addon-package-shopping-cart

A storybook addon to assist in installing multi-package projects.

NOTE: This package is in no way affiliated with Microsoft or Fluent UI. 
Fluent UI was chosen for the demo below, because it is a mature mono-repo with individually packaged components, so it can provide a good showcase for this packages functionality.

![Example](https://github.com/willwill96/mono-repo-tools/raw/master/assets/gifs/storybook-addon-package-shopping-cart.gif.png)

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
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  }
};

```

## Package Context Determination

This addon determines the current package by directory structure. The closest parent package.json is used for the currently active package.

Any packages without a version field or with `private: true`, will be ignored by this addon.
