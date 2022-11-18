export interface LoaderOptions {
  enableChangelog?: boolean;
  enableReadme?: boolean;
  enablePkgJson?: boolean;
}

export interface WebpackLoaderContext {
  resourcePath: string;
  // getOptions will be undefined in webpack 4
  getOptions?: () => LoaderOptions;
}
