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

export type InstallablePackage = {
  name: string;
  version: string;
};

export interface PackageShoppingCartParameterConfig {
  determineVersionToInstall?: (input: InstallablePackage) => string;
}

export type CurrentPackageState =
  | (InstallablePackage & {
      type: PackageInfoType.ALREADY_ADDED | PackageInfoType.NOT_ADDED;
    })
  | {
      type: PackageInfoType.NO_PACKAGE;
    };

export type PackageShoppingCartExtendedTheme = {
  quickAddButton: {
    /* Default: props.theme.color.positive */
    addIconColor: string;
    /* Default: props.theme.color.negative */
    removeIconColor: string;
  };
  shoppingCart: {
    badge: {
      /* Default: props.theme.color.primary */
      bgColor: string;
      /* Default: props.theme.color.defaultText */
      textColor: string;
    };
    addButton: {
      /* Default: props.theme.color.positive */
      bgColor: string;
      /* Default: props.theme.color.defaultText */
      textColor: string;
    };
    disabledButton: {
      /* Default: props.theme.color.tertiary */
      bgColor: string;
      /* Default: props.theme.color.inverseText */
      textColor: string;
    };
    removeButton: {
      /* Default: props.theme.color.negative */
      bgColor: string;
      /* Default: props.theme.color.defaultText */
      textColor: string;
    };
  };
};
