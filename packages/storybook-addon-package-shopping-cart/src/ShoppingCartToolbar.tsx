import React from "react";
import { IconButton, WithTooltip } from "@storybook/components";
import ShoppingCartIcon from "./ShoppingCartIcon";
import ShoppingCartTooltip from "./ShoppingCartTooltip";
import { useAddonState, useParameter } from "@storybook/api";
import { PackageContext } from "./types";

export default function ShoppingCartToolbar() {
  const [packages, setPackages] = useAddonState(
    "storybook-addon-package-shopping-cart",
    [] as string[]
  );
  const packageContext = useParameter("packageContext") as PackageContext;
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
          />
        );
      }}
    >
      <IconButton title="Storybook Package Shopping Cart">
        <ShoppingCartIcon />
      </IconButton>
    </WithTooltip>
  );
}
