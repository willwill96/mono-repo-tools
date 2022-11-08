import React from "react";
import { Icons, Button, Span } from "@storybook/components";
import PackageInstallationInstructions from "./PackageInstallationInstructions";
import { styled } from "@storybook/theming";
import { PackageContext, PackageInfoType } from "./types";

const Root = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 600px;
    max-width: 90vw;
  }}
`;
const AddRemoveButton = styled(Button)`
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  display: flex;
  alignitems: center;
  justifycontent: center;
`;

const ButtonText = styled.span`
  padding-top: 2px;
  padding-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-grow: 1;
  text-align: left;
`;

const ShoppingCartTitle = styled(Span)`
  align-self: center;
  text-decoration: underline;
  font-weight: bold;
  font-size: 20px;
`;

const getAddPackageInfo = (
  packageContext: PackageContext,
  packages: string[]
) => {
  if (
    !packageContext ||
    !packageContext.pkgJson ||
    !packageContext.pkgJson.name ||
    packageContext.pkgJson.private
  )
    return {
      text: "No related package found",
      type: PackageInfoType.NO_PACKAGE,
    };
  const packageName = packageContext.pkgJson.name;
  if (packages.includes(packageName))
    return {
      text: `Remove ${packageName}`,
      type: PackageInfoType.ALREADY_ADDED,
    };
  return { text: `Add ${packageName}`, type: PackageInfoType.NOT_ADDED };
};

export default function ShoppingCartTooltip({
  packages,
  setPackages,
  packageContext,
}: {
  packages: string[];
  setPackages: (input: (before: string[]) => string[]) => void;
  packageContext: PackageContext;
}) {
  const packageInfo = getAddPackageInfo(packageContext, packages);
  return (
    <Root>
      <AddRemoveButton
        primary={packageInfo.type === PackageInfoType.NOT_ADDED}
        secondary={packageInfo.type === PackageInfoType.ALREADY_ADDED}
        tertiary={packageInfo.type === PackageInfoType.NO_PACKAGE}
        disabled={packageInfo.type === PackageInfoType.NO_PACKAGE}
        onClick={() => {
          if (packageInfo.type === PackageInfoType.NOT_ADDED) {
            setPackages((before) => [
              // Sometimes before is null downstream
              ...(before || []),
              (packageContext as any).pkgJson.name,
            ]);
          } else {
            setPackages((before) =>
              before.filter(
                (pkg) => pkg !== (packageContext as any).pkgJson.name
              )
            );
          }
        }}
      >
        <Icons
          style={{
            width: "1.25em",
            height: "1.25em",
            marginBottom: 0,
          }}
          icon={
            packageInfo.type === PackageInfoType.ALREADY_ADDED
              ? "subtract"
              : "add"
          }
        />
        <ButtonText>{packageInfo.text}</ButtonText>
      </AddRemoveButton>
      <PackageInstallationInstructions packages={packages} />
      <ShoppingCartTitle style={{}}>Package Shopping Cart</ShoppingCartTitle>
      {packages.length === 0 && (
        <Span style={{ alignSelf: "center" }}>No Packages in Cart</Span>
      )}
      {packages.map((pkg) => {
        return (
          <AddRemoveButton
            key={pkg}
            secondary
            onClick={() => {
              // using setTimeout because Storybook Tooltip propagates the click after clicking remove
              // and subsequently closes the tooltip
              // stopPropagation & preventDefault did not help here
              setTimeout(
                () =>
                  setPackages((before) =>
                    before.filter((subPkg) => subPkg !== pkg)
                  ),
                0
              );
            }}
          >
            <Icons
              style={{
                width: "1.25em",
                height: "1.25em",
                flexGrow: 0,
                marginBottom: 0,
              }}
              icon="subtract"
            />
            <ButtonText>Remove {pkg}</ButtonText>
          </AddRemoveButton>
        );
      })}
    </Root>
  );
}
