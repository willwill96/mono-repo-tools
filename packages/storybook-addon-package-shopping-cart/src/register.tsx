import { addons, types } from "@storybook/addons";
import ShoppingCartToolbar from "./ShoppingCartToolbar";

addons.register("storybook-addon-package-shopping-cart", () => {
  addons.add("storybook-addon-package-shopping-cart/toolbar", {
    title: "Storybook Package Shopping Cart for Monorepos",
    //👇 Sets the type of UI element in Storybook
    type: types.TOOL,
    //👇 Shows the Toolbar UI element if either the Canvas or Docs tab is active
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: ShoppingCartToolbar,
  });
});
