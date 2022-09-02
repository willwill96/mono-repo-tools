import ts from "typescript";
import { getRequireString } from "./get-require-string";
function nonEmpty(child: ts.Node) {
  return Boolean(child.getText());
}

const importDeclaration =
  'var withPackageContext = require("storybook-package-context-loader/dist/with-package-context").withPackageContext\n';

function injectDefaultExport(source: string, fileLocation: string) {
  return importDeclaration
    .concat(source)
    .concat(
      `\nexport default withPackageContext({}, ${getRequireString(
        fileLocation
      )})`
    );
}

function injectExistingDefaultExport(
  source: string,
  fileLocation: string,
  defaultExport: ts.Node
) {
  let newSource = source;
  const start = defaultExport.getStart();
  const end = defaultExport.getEnd();

  newSource =
    newSource.slice(0, end) +
    `, ${getRequireString(fileLocation)})` +
    newSource.slice(end);

  newSource =
    newSource.slice(0, start) + "withPackageContext(" + newSource.slice(start);

  return importDeclaration.concat(newSource);
}

function transform(source: string) {
  try {
    // @ts-ignore This comes from webpack context
    const fileLocation = this.resourcePath;
    const file = ts.createSourceFile(
      "temp.ts",
      source,
      ts.ScriptTarget.ES5,
      true
    );
    const defaultExport = file
      .getChildren()
      .filter(nonEmpty)[0]
      .getChildren()
      .find(
        (f) =>
          ts.isExportAssignment(f) && f.getChildren()[1].getText() === "default"
      );
    if (!defaultExport) return injectDefaultExport(source, fileLocation);
    const exportDefinition = defaultExport.getChildren()[2];
    return injectExistingDefaultExport(source, fileLocation, exportDefinition);
  } catch {
    console.log(
      "[storybook-package-context-loader]: Something went wrong parsing the package. Not modifying source"
    );
  }

  return source;
}
export default transform;
