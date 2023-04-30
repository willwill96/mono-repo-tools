import { getPackagesSync } from "@manypkg/get-packages";
import { execSync } from "child_process";
import writeChangeset from "@changesets/write";
import path from "path";
import fs from "fs";
import {
  associateCommitsToConventionalCommitMessages,
  conventionalMessagesWithCommitsToChangesets,
  getCommitsSinceRef,
} from "./utils";

const CHANGESET_CONFIG_LOCATION = path.join(".changeset", "config.json");

interface PackageJson {
  private?: boolean;
  name?: string;
  version?: string;
}

interface Package {
  packageJson: PackageJson;
  dir: string;
}

interface Packages {
  packages: Package[];
  root: Package;
}

const conventionalCommitChangeset = (
  cwd: string = process.cwd(),
  options: { ignoredFiles: (string | RegExp)[] } = { ignoredFiles: [] }
) => {
  const packages = (getPackagesSync(cwd) as Packages).packages.filter(
    (pkg) => !pkg.packageJson.private && Boolean(pkg.packageJson.version)
  );
  const changesetConfig = JSON.parse(
    fs.readFileSync(path.join(cwd, CHANGESET_CONFIG_LOCATION)).toString()
  );
  const { baseBranch = "main" } = changesetConfig;

  const commitsSinceBase = getCommitsSinceRef(baseBranch);

  const commitsWithMessages = commitsSinceBase.map((commitHash) => ({
    commitHash,
    commitMessage: execSync(
      `git log -n 1 --pretty=format:%s ${commitHash}`
    ).toString(),
  }));

  const changelogMessagesWithAssociatedCommits =
    associateCommitsToConventionalCommitMessages(commitsWithMessages);

  const changesets = conventionalMessagesWithCommitsToChangesets(
    changelogMessagesWithAssociatedCommits,
    { ignoredFiles: options.ignoredFiles, packages }
  );
  changesets.forEach((changeset) => writeChangeset(changeset, cwd));
};

conventionalCommitChangeset();
