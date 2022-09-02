export interface LoaderOptions {
  enableChangelog?: boolean;
  enableReadme?: boolean;
  enablePkgJson?: boolean;
}

export interface WebpackLoaderContext {
  resourcePath: string;
  getOptions: () => LoaderOptions;
}

export interface PkgJson {
  name?: string;
  version?: string;
  private?: boolean;
}
