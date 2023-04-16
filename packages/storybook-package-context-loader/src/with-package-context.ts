import { packageNameToTitle } from "./package-name-to-title";

interface StorybookConfig {
  parameters?: Record<string, any>;
}

const withPackageContext = (
  config: StorybookConfig,
  pkgJson: Record<string, any> | undefined,
  readme: any | undefined,
  changelog: any | undefined
) => {
  console.log('config', config)
  if (config.parameters && config.parameters.packageContext === null) {
    return config;
  }
  return {
    title: pkgJson?.name && packageNameToTitle(pkgJson.name),
    ...config,
    parameters: {
      ...(config.parameters || {}),
      packageContext: {
        pkgJson,
        // Sometimes when importing .md files, the contents are treated as a default export,
        // and sometimes as a module export. I am not sure why yet
        readme: readme?.default || readme,
        changelog: changelog?.default || changelog,
      },
    },
  };
};
export { withPackageContext };
