import React, { useContext } from "react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
  DocsContext,
} from "@storybook/addon-docs";

const getInstallationInstructions = (pkgJson) => {
  if (!pkgJson || !pkgJson.name || pkgJson.private) return;
  return `\n\n# Package Installation Instructions\n\`\`\`\n\n\nnpm install ${pkgJson.name}\n\`\`\`\n`;
};

const DocsPage = () => {
  const context = useContext(DocsContext);
  const storyContext = context.getStoryContext(context.storyById(context.id));
  const { pkgJson, readme, changelog } =
    storyContext.parameters.packageContext || {};
  const installationInstructions = getInstallationInstructions(pkgJson);
  return (
    <>
      <Title />
      {pkgJson && !pkgJson.private && (
        <Subtitle>{`${pkgJson.name}@${pkgJson.version}`}</Subtitle>
      )}
      {installationInstructions && (
        <Description markdown={installationInstructions} />
      )}
      <Description />
      {readme && (
        <details>
          <summary>View Package Readme</summary>
          <Description markdown={readme} />
        </details>
      )}
      {changelog && (
        <details>
          <summary>View Package Changelog</summary>
          <Description markdown={changelog} />
        </details>
      )}
      <Primary />
      <ArgsTable story={PRIMARY_STORY} />
      <Stories />
    </>
  );
};

export default DocsPage;
