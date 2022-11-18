import React from "react";
import { IconButton, Icons } from "@storybook/components";
import { useAddonState, useParameter } from "@storybook/api";
import {
  CurrentPackageState,
  InstallablePackage,
  PackageContext,
  PackageInfoType,
} from "./types";
import { getCurrentPackageState } from "./get-current-package-state";
import { styled } from "@storybook/theming";

const CustomIconButton = styled(IconButton)<{ $type: PackageInfoType }>`
  ${(props) => props.$type === PackageInfoType.NO_PACKAGE && "opacity: 0.5;"}
  ${(props) =>
    props.$type !== PackageInfoType.NO_PACKAGE &&
    `color: ${
      props.$type === PackageInfoType.ALREADY_ADDED
        ? props.theme?.packageShoppingCart?.quickAddButton?.removeIconColor ||
          props.theme.color.negative
        : props.theme?.packageShoppingCart?.quickAddButton?.addIconColor ||
          props.theme.color.positive
    };`}
  &:hover {
    ${(props) =>
      props.$type !== PackageInfoType.NO_PACKAGE &&
      `color: ${
        props.$type === PackageInfoType.ALREADY_ADDED
          ? props.theme?.packageShoppingCart?.quickAddButton?.removeIconColor ||
            props.theme.color.negative
          : props.theme?.packageShoppingCart?.quickAddButton?.addIconColor ||
            props.theme.color.positive
      };`}
  }
`;

const getButtonTitle = (state: CurrentPackageState) => {
  if (state.type === PackageInfoType.NO_PACKAGE)
    return "No Related Package Found";
  else if (state.type === PackageInfoType.ALREADY_ADDED)
    return `Remove ${state.name} from cart`;
  else return `Add ${state.name} to cart`;
};

export default function ShoppingCartQuickAddToCart() {
  const [packages, setPackages] = useAddonState(
    "storybook-addon-package-shopping-cart",
    [] as InstallablePackage[]
  );
  const packageContext = useParameter("packageContext") as PackageContext;
  const packageInfo = getCurrentPackageState(packageContext, packages);
  return (
    <CustomIconButton
      disabled={packageInfo.type === PackageInfoType.NO_PACKAGE}
      $type={packageInfo.type}
      title={getButtonTitle(packageInfo)}
      onClick={() => {
        if (packageInfo.type === PackageInfoType.NOT_ADDED) {
          setPackages((before) => [
            // Sometimes before is null downstream
            ...(before || []),
            { name: packageInfo.name, version: packageInfo.version },
          ]);
        } else {
          setPackages((before) =>
            before.filter((pkg) => pkg !== (packageContext as any).pkgJson.name)
          );
        }
      }}
    >
      <Icons
        icon={
          packageInfo.type === PackageInfoType.ALREADY_ADDED
            ? "subtract"
            : "add"
        }
      />
    </CustomIconButton>
  );
}
