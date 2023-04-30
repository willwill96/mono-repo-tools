export interface PkgJson {
  name?: string;
  version?: string;
  private?: boolean;
  dependencies?: {
    [key: string]: string;
  };
  devDependencies?: {
    [key: string]: string;
  };
  peerDependencies?: {
    [key: string]: string;
  };
  optionalDependencies?: {
    [key: string]: string;
  };
  bundledDependencies?: string[];
  bin?:
    | string
    | {
        [key: string]: string;
      };
  scripts?: {
    [key: string]: string;
  };
  engines?: {
    [key: string]: string;
  };
  files?: string[];
  main?: string;
  browser?: string;
  types?: string;
  typings?: string;
  module?: string;
  unpkg?: string;
  sideEffects?: boolean;
  workspaces?: string[];
}

export interface ManyPkgPackage {
  packageJson: PkgJson;
  dir: string;
}

export interface ManyPkgPackages {
  packages: ManyPkgPackage[];
  root: ManyPkgPackage;
}
