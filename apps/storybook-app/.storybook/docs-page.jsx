const { DocsContext } = require("@storybook/addon-docs");
const test = require("../README.md");
export const DocsPage = () => {
  console.log(test);
  return <div>hi</div>;
};
