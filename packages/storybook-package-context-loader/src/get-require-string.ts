import path from "path";
import fs from "fs";
import { execSync } from "child_process";
import type { LoaderOptions } from "./types";

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
    .replaceAll("\n", "");
  const rootPackageDirectory = getRootPackageDirectory(
    path.resolve(topLevelDirectory),
    path.resolve(fileLocation)
  );
  if (!rootPackageDirectory) return undefined;
  const requireStrings = [];
  const pkgJsonPath = path.join(rootPackageDirectory, "package.json");
  if (fs.existsSync(pkgJsonPath) && options.enablePkgJson !== false) {
    requireStrings.push(`require('${pkgJsonPath}')`);
  }
  const changelogPath = path.join(rootPackageDirectory, "CHANGELOG.md");
  if (fs.existsSync(changelogPath) && options.enableChangelog !== false) {
    requireStrings.push(`require('${changelogPath}')`);
  }
  const readmePath = path.join(rootPackageDirectory, "README.md");
  if (fs.existsSync(readmePath) && options.enableReadme !== false) {
    requireStrings.push(`require('${readmePath}')`);
  }

  return requireStrings.join(",");
}
