const transform = require("./dist").default;
const fs = require("fs");

const src = fs
  .readFileSync("../../apps/storybook-app/introduction.stories.tsx")
  .toString();

// console.log(src)
class MyClass {
  constructor() {
    this.resourcePath =
      "/workspaces/mono-repo-tools/apps/storybook-app/introduction1.stories.tsx";
  }
}

console.log(transform.bind(new MyClass())(src));
