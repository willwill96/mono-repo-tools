export interface PackageContext {
  pkgJson?: {
    name?: string;
    version?: string;
    private?: boolean;
  };
}

export enum PackageInfoType {
  NO_PACKAGE,
  ALREADY_ADDED,
  NOT_ADDED,
}
