import {
  CurrentPackageState,
  InstallablePackage,
  PackageContext,
  PackageInfoType,
} from "./types";

export const getCurrentPackageState = (
  packageContext: PackageContext,
  packages: InstallablePackage[]
): CurrentPackageState => {
  if (
    !packageContext ||
    !packageContext.pkgJson ||
    !packageContext.pkgJson.name ||
    !packageContext.pkgJson.version ||
    packageContext.pkgJson.private
  )
    return {
      type: PackageInfoType.NO_PACKAGE,
    };
  const packageName = packageContext.pkgJson.name;
  if (packages.some((pkg) => pkg.name === packageName))
    return {
      name: packageContext.pkgJson.name,
      version: packageContext.pkgJson.version,
      type: PackageInfoType.ALREADY_ADDED,
    };
  return {
    name: packageContext.pkgJson.name,
    type: PackageInfoType.NOT_ADDED,
    version: packageContext.pkgJson.version,
  };
};
