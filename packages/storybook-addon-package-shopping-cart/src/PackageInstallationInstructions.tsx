import { styled } from "@storybook/theming";
import React, { useState, useEffect } from "react";

const Title = styled.span`
  margin-top: 2px;
  margin-bottom: 8px;
  font-size: 20px;
  font-size: 20px;
  display: block;
`;

const InstallCommandRoot = styled.div`
  position: relative;
  background: black;
  color: white;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid white;
`;
const InstallCommandText = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  padding: 8px;
`;

const CopyText = styled.span`
  position: absolute;
  font-size: 12px;
  right: 0;
  bottom: 0;
  color: black;
  padding: 4px;
  cursor: pointer;
  border-top-left-radius: 4px;
  background-color: white;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.color.secondary};
  }
`;

const copyTextToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {}
  return false;
};

export default function PackageInstallationInstructions({
  packages,
}: {
  packages: string[];
}) {
  const text = `npm install ${packages.join(" ")}`;

  const [copySuccessful, setCopySuccessful] = useState(false);

  useEffect(() => {
    setCopySuccessful(false);
  }, [text]);

  if (!packages || packages.length === 0) return null;
  return (
    <div>
      <Title>Installation Instructions</Title>
      <InstallCommandRoot>
        <InstallCommandText>{text}</InstallCommandText>
        <CopyText
          onClick={async () => {
            setCopySuccessful(await copyTextToClipboard(text));
          }}
        >
          Copy Script{copySuccessful && " ✔"}
        </CopyText>
      </InstallCommandRoot>
    </div>
  );
}
