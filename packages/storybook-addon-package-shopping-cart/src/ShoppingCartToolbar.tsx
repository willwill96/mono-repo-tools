import React from "react";
import { IconButton, WithTooltip } from "@storybook/components";
import ShoppingCartIcon from "./ShoppingCartIcon";
import ShoppingCartTooltip from "./ShoppingCartTooltip";
import { useAddonState, useParameter } from "@storybook/api";
import {
  InstallablePackage,
  PackageContext,
  PackageShoppingCartParameterConfig,
} from "./types";
import ShoppingCartBadge from "./ShoppingCartBadge";

export default function ShoppingCartToolbar() {
  const [packages, setPackages] = useAddonState(
    "storybook-addon-package-shopping-cart",
    [] as InstallablePackage[]
  );
  const packageContext = useParameter("packageContext") as PackageContext;
  const packageShoppingCartConfig = useParameter(
    "packageShoppingCart"
  ) as PackageShoppingCartParameterConfig;
  return (
    <WithTooltip
      placement="top"
      trigger="click"
      closeOnClick
      tooltip={() => {
        if (!packages) return null;
        return (
          <ShoppingCartTooltip
            packages={packages}
            setPackages={setPackages}
            packageContext={packageContext}
            determineVersionToInstall={
              packageShoppingCartConfig &&
              packageShoppingCartConfig.determineVersionToInstall
            }
          />
        );
      }}
    >
      <IconButton
        title="Storybook Package Shopping Cart"
        style={{ position: "relative" }}
      >
        <ShoppingCartIcon />
        <ShoppingCartBadge />
      </IconButton>
    </WithTooltip>
  );
}
