import path from "path";
import fs from "fs";
import { execSync } from "child_process";
import type { LoaderOptions } from "./types";

const UNDEFINED_STRING = "undefined";

function getRootPackageDirectory(
  topLevelDirectory: string,
  fileLocation: string
) {
  let currentDirectory = path.dirname(fileLocation);
  while (currentDirectory.length >= topLevelDirectory.length) {
    if (fs.existsSync(path.join(currentDirectory, "package.json"))) {
      return currentDirectory;
    }
    currentDirectory = path.resolve(currentDirectory, "..");
  }
  return undefined;
}

export function getRequireString(fileLocation: string, options: LoaderOptions) {
  const topLevelDirectory = execSync("git rev-parse --show-toplevel")
    .toString()
    .replace(/\n/g, "");
  const rootPackageDirectory = getRootPackageDirectory(
    path.resolve(topLevelDirectory),
    path.resolve(fileLocation)
  );
  const imports: Record<string, string> = {}
  if (!rootPackageDirectory) return {imports, requireString: undefined};
  const requireStrings = [];
  const pkgJsonPath = path.join(rootPackageDirectory, "package.json");
  if (fs.existsSync(pkgJsonPath) && options.enablePkgJson !== false) {
    imports.pkgJsonPackageParser = pkgJsonPath
    requireStrings.push(`pkgJsonPackageParser`);
  } else {
    requireStrings.push(UNDEFINED_STRING);
  }
  const readmePath = path.join(rootPackageDirectory, "README.md?raw");
  if (fs.existsSync(readmePath) && options.enableReadme !== false) {
    imports.readmePackageParser = readmePath
    requireStrings.push('readmePackageParser');
  } else {
    requireStrings.push(UNDEFINED_STRING);
  }
  const changelogPath = path.join(rootPackageDirectory, "CHANGELOG.md?raw");
  if (fs.existsSync(changelogPath) && options.enableChangelog !== false) {
    imports.changelogPackageParser = changelogPath
    requireStrings.push('changelogPackageParser');
  } else {
    requireStrings.push(UNDEFINED_STRING);
  }
  return {
    imports,
    requireString: requireStrings.join(",")
  }
}
