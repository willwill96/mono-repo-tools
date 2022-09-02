import ts from "typescript";
import { getRequireString } from "./get-require-string";
import type { LoaderOptions, WebpackLoaderContext } from "./types";

function nonEmpty(child: ts.Node) {
  return Boolean(child.getText());
}

const importDeclaration =
  'var withPackageContext = require("storybook-package-context-loader/dist/with-package-context").withPackageContext\n';

interface InjectFnOptions {
  source: string
  fileLocation: string
  options: LoaderOptions
}

function injectDefaultExport({source, fileLocation, options}:InjectFnOptions) {
  const requireString = getRequireString(fileLocation,options)
  if (!requireString) return source
  return importDeclaration
    .concat(source)
    .concat(
      `\nexport default withPackageContext({}, ${requireString})`
    );
}

function injectExistingDefaultExport(
  {source, fileLocation, exportDefinition, options}:InjectFnOptions & {exportDefinition: ts.Node}
) {
  const requireString = getRequireString(fileLocation, options)
  if (!requireString) return source
  let newSource = source;
  const start = exportDefinition.getStart();
  const end = exportDefinition.getEnd();

  newSource =
    newSource.slice(0, end) +
    `, ${requireString})` +
    newSource.slice(end);

  newSource =
    newSource.slice(0, start) + "withPackageContext(" + newSource.slice(start);

  return importDeclaration.concat(newSource);
}



function transform(this: WebpackLoaderContext, source: string) {
  try {
    // @ts-ignor This comes from webpack context
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
    const options = this.getOptions()
    if (!defaultExport) return injectDefaultExport({source, fileLocation, options});
    const exportDefinition = defaultExport.getChildren()[2];
    return injectExistingDefaultExport({source, fileLocation, options, exportDefinition});
  } catch {
    console.log(
      "[storybook-package-context-loader]: Something went wrong parsing the package. Not modifying source"
    );
  }

  return source;
}
export default transform;
