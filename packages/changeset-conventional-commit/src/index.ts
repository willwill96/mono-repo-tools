import { getPackagesSync } from "@manypkg/get-packages";
import { execSync } from "child_process";
import writeChangeset from "@changesets/write";
import type { Changeset } from "@changesets/types";
import path from "path";
import fs from "fs";
/*
 * Copied from conventionalcommits config:
 * https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-conventionalcommits/writer-opts.js
 * "section" is currently unused but is left in, with the intent to update changeset changelog generation once more fleshed out
 */
const defaultCommitTypes = [
  { type: "feat", section: "Features" },
  { type: "feature", section: "Features" },
  { type: "fix", section: "Bug Fixes" },
  { type: "perf", section: "Performance Improvements" },
  { type: "revert", section: "Reverts" },
  { type: "docs", section: "Documentation" },
  { type: "style", section: "Styles" },
  { type: "chore", section: "Miscellaneous Chores" },
  { type: "refactor", section: "Code Refactoring" },
  { type: "test", section: "Tests" },
  { type: "build", section: "Build System" },
  { type: "ci", section: "Continuous Integration" },
];

const isConventionalCommit = (commit: string) => {
  return defaultCommitTypes.some((commitType) =>
    commit.match(new RegExp(`^${commitType.type}(?:\(.*\))?!?:`))
  );
};



const isBreakingChange = (commit: string) => {
  return (
    commit.includes("BREAKING CHANGE:") ||
    defaultCommitTypes.some((commitType) =>
      commit.match(new RegExp(`^${commitType.type}(?:\(.*\))?!:`))
    )
  );
};

const getCommitsSinceRef = (branch: string) => {
  return execSync(`git rev-list --ancestry-path ${branch}...HEAD`)
    .toString()
    .split("\n")
    .filter(Boolean)
    .reverse();
};

const getRepoRoot = () => {
  return execSync("git rev-parse --show-toplevel")
    .toString()
    .trim()
    .replace(/\n|\r/g, "");
};

const getFilesChangedSince = (opts: { from: string; to: string }) => {
  return execSync(`git diff --name-only ${opts.from}~1...${opts.to}`)
    .toString()
    .trim()
    .split("\n");
};

const gitFetch = (branch: string) => {
  execSync(`git fetch origin ${branch}`);
};

const CHANGESET_CONFIG_LOCATION = path.join(".changeset", "config.json");

const conventionalCommitChangeset = (
  cwd: string = process.cwd(),
  options: { ignoredFiles: (string | RegExp)[] } = { ignoredFiles: [] }
) => {
  const packages = getPackagesSync(cwd);
  const changesetConfig = JSON.parse(
    fs.readFileSync(path.join(cwd, CHANGESET_CONFIG_LOCATION)).toString()
  );
  const { baseBranch = "main" } = changesetConfig;
  gitFetch(baseBranch);
  const commitsSinceBase = getCommitsSinceRef(`origin/${baseBranch}`);

  const commitsWithMessages = commitsSinceBase.map((commitHash) => ({
    commitHash,
    commitMessage: execSync(
      `git log -n 1 --pretty=format:%s ${commitHash}`
    ).toString(),
  }));

  // Attempts to associate non-conventional commits to the nearest conventional commit
  const changelogMessagesWithAssociatedCommits = commitsWithMessages.reduce(
    (acc, curr) => {
      if (!acc.length) {
        return [
          {
            changelogMessage: curr.commitMessage,
            commitHashes: [curr.commitHash],
          },
        ];
      }

      if (isConventionalCommit(curr.commitMessage)) {
        if (isConventionalCommit(acc[acc.length - 1].changelogMessage)) {
          return [
            ...acc,
            {
              changelogMessage: curr.commitMessage,
              commitHashes: [curr.commitHash],
            },
          ];
        } else {
          return [
            ...acc.slice(0, acc.length - 1),
            {
              changelogMessage: curr.commitMessage,
              commitHashes: [
                ...acc[acc.length - 1].commitHashes,
                curr.commitHash,
              ],
            },
          ];
        }
      } else {
        return [
          ...acc.slice(0, acc.length - 1),
          {
            ...acc[acc.length - 1],
            commitHashes: [
              ...acc[acc.length - 1].commitHashes,
              curr.commitHash,
            ],
          },
        ];
      }
    },
    [] as { changelogMessage: string; commitHashes: string[] }[]
  );

  const changesets = changelogMessagesWithAssociatedCommits
    .map((entry) => {
      const filesChanged = getFilesChangedSince({
        from: entry.commitHashes[0],
        to: entry.commitHashes[entry.commitHashes.length - 1],
      }).filter((file) => {
        return options.ignoredFiles.every(
          (ignoredPattern) => !file.match(ignoredPattern)
        );
      });
      const packagesChanged = packages.packages.filter((pkg) => {
        return filesChanged.some((file) =>
          file.match(pkg.dir.replace(`${getRepoRoot()}/`, ""))
        );
      });
      if (packagesChanged.length === 0) return null;
      return {
        releases: packagesChanged.map((pkg) => {
          return {
            name: pkg.packageJson.name,
            type: isBreakingChange(entry.changelogMessage)
              ? "major"
              : entry.changelogMessage.startsWith("feat")
              ? "minor"
              : "patch",
          };
        }),
        summary: entry.changelogMessage,
        packagesChanged,
      };
    })
    .filter(Boolean) as Changeset[];

  changesets.forEach((changeset) => writeChangeset(changeset, cwd));
};

conventionalCommitChangeset();
