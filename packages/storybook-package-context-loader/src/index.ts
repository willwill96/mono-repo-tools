import ts from "typescript";
import { getOptions } from "loader-utils";
import { getRequireString } from "./get-require-string";
import type { LoaderOptions, WebpackLoaderContext } from "./types";

function nonEmpty(child: ts.Node) {
  return Boolean(child.getText());
}

const importDeclaration =
  'import {withPackageContext} from "storybook-package-context-loader/src/with-package-context"\n';

interface InjectFnOptions {
  source: string;
  fileLocation: string;
  options: LoaderOptions;
}

function injectDefaultExport({
  source,
  fileLocation,
  options,
}: InjectFnOptions) {
  const {requireString, imports} = getRequireString(fileLocation, options);
  if (!requireString) return source;
  return importDeclaration
    .concat(source).concat(...Object.keys(imports).map(key=>{
      console.log('import', imports[key])
      console.log('key', key)
      return `import ${key} from "${imports[key]}"\n`
    }))
    .concat(`\nexport default withPackageContext({}, ${requireString})`);
}

function injectExistingDefaultExport({
  source,
  fileLocation,
  exportDefinition,
  options,
}: InjectFnOptions & { exportDefinition: ts.Node }) {
  const {requireString, imports} = getRequireString(fileLocation, options);
  if (!requireString) return source;
  let newSource = source;
  const start = exportDefinition.getStart();
  const end = exportDefinition.getEnd();

  newSource =
    newSource.slice(0, end) + `, ${requireString})` + newSource.slice(end);

  newSource =
    newSource.slice(0, start) + "withPackageContext(" + newSource.slice(start);

  return importDeclaration.concat(...Object.keys(imports).map(key=>{
    console.log('import', imports[key])
    console.log('key', key)
    return `import ${key} from "${imports[key]}"\n`
  })).concat(newSource);
}

function getScriptKind(fileName: string) {
  if (fileName.endsWith(".tsx")) {
    return ts.ScriptKind.TSX;
  } else if (fileName.endsWith(".jsx")) {
    return ts.ScriptKind.JSX;
  } else if (fileName.endsWith(".ts")) {
    return ts.ScriptKind.TS;
  } else if (fileName.endsWith(".js")) {
    return ts.ScriptKind.JS;
  }
}

function transform(this: WebpackLoaderContext, source: string) {
  try {
    const fileLocation = this.resourcePath;
    const scriptKind = getScriptKind(fileLocation);
    const file = ts.createSourceFile(
      "temp.ts",
      source,
      ts.ScriptTarget.ES5,
      true,
      scriptKind
    );
    const defaultExport = file
      .getChildren()
      .filter(nonEmpty)[0]
      .getChildren()
      .find(
        (f) =>
          ts.isExportAssignment(f) && f.getChildren()[1].getText() === "default"
      );
    const options =
      (this.getOptions ? this.getOptions() : getOptions(this)) || {};
    if (!defaultExport)
      return injectDefaultExport({ source, fileLocation, options });
    const exportDefinition = defaultExport.getChildren()[2];
    return injectExistingDefaultExport({
      source,
      fileLocation,
      options,
      exportDefinition,
    });
  } catch {
    console.log(
      "[storybook-package-context-loader]: Something went wrong parsing the package. Not modifying source"
    );
  }

  return source;
}
export default transform;
