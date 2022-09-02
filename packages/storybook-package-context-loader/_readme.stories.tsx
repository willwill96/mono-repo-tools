import React from "react";
import { Description } from "@storybook/components";
import { ThemeProvider, ensure, themes } from "@storybook/theming";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const markdown = require("./README.md");
export const StorybookPackageContextLoader = () => (
  <ThemeProvider theme={ensure(themes.light)}>
    <Description markdown={markdown} />
  </ThemeProvider>
);

export default {
  title: "Storybook / Storybook Package Context Loader",
};
