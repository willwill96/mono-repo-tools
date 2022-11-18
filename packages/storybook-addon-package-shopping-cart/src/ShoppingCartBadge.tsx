import React from "react";
import { useAddonState } from "@storybook/api";
import { styled } from "@storybook/theming";

const BadgeText = styled.span`
  font-size: 10px;
  position: absolute;
  top: 0;
  right: 0;
  width: 14px;
  height: 14px;
  color: ${(props) =>
    props.theme?.packageShoppingCart?.shoppingCart?.badge?.textColor ||
    props.theme.color.inverseText};
  background-color: ${(props) =>
    props.theme?.packageShoppingCart?.shoppingCart?.badge?.bgColor ||
    props.theme.color.primary};
  border-radius: 100%;
`;

const ShoppingCartBadge = () => {
  const [packages] = useAddonState(
    "storybook-addon-package-shopping-cart",
    [] as string[]
  );
  if (!packages || !packages.length) return null;
  return <BadgeText>{packages.length}</BadgeText>;
};
export default ShoppingCartBadge;
