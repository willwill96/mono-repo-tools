# storybook-package-context-loader

Webpack loader for mono-repos utilizing [Storybookjs](https://storybook.js.org/) to automatically inject storybook parameters to contextualize the containing package for `.stories.tsx` files

Using this webpack loader on your stories will add a storybook parameter `packageContext` which has the following information:

- `pkgJson` Json object of closest package.json if available
- `readme` Raw string of contents of package `README.md` if available
- `changelog` Raw string of contents of package `CHANGELOG.md` if available

# Usage

## Installation

```

npm install storybook-package-context-loader

```

## Add webpack loader to storybook main.js file

Add the webpack loader to your `.storybook/main.js` file under `webpackFinal`:

```
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.stories\.(t|j)sx$/,
      use: [require.resolve("storybook-package-context-loader")],
    });
    return config;
  },
```

## Configuration

You can optionally disable the loader from including any of the parsed files by passing options to the loader:

```
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.stories\.tsx$/,
      use: {
        loader: require.resolve("storybook-package-context-loader"),
        options: {
          enableReadme: false,
          enablePkgJson: false,
          enableChangelog: false
        }
      },
    });
    return config;
  },
```

## Parsing .md files

### Webpack 5

If you're using storybook with webpack 5, markdown files should be automatically set up to be parsed.

If for some reason that's not working you can manually configure them as [source assets](https://webpack.js.org/guides/asset-modules/#source-assets) with the following:

```
  webpackFinal: (config) => {
    ...
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source',
    })
    return config;
  },
```

### Webpack 4

If you're using storybook with webpack 4, you'll want to configure markdown files to be parsed via [raw-loader](https://v4.webpack.js.org/loaders/raw-loader/) with the following:

```
  webpackFinal: (config) => {
    ...
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })
    return config;
  },
```

## Disable context parsing for story

If you want to disable package context loading for a story, you can pass `parameters.packageContext=null` to your component's story:

```
export default: {
  parameters: {
    packageContext: null
  }
}
```
