import React from "react";
import { Icons } from "@storybook/components";
import PackageInstallationInstructions from "./PackageInstallationInstructions";
import { styled } from "@storybook/theming";
import {
  CurrentPackageState,
  InstallablePackage,
  PackageContext,
  PackageInfoType,
  PackageShoppingCartParameterConfig,
} from "./types";
import { getCurrentPackageState } from "./get-current-package-state";

const Root = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 600px;
    max-width: 90vw;
  }}
`;

const AddRemoveButton = styled.button<{
  add?: boolean;
  remove?: boolean;
  disabled?: boolean;
}>`
  font-size: 16px;
  border-radius: 4px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  display: flex;
  gap: 8px;
  ${(props) =>
    !props.disabled &&
    `&:hover {
    filter: brightness(0.85);
  }`}
  padding: 8px 12px;
  alignitems: center;
  justifycontent: center;
  ${(props) => props.disabled && "opacity: 0.5;"}
  ${(props) => (!props.disabled ? "cursor: pointer;" : "cursor: not-allowed;")}
  color: ${(props) => {
    if (props.disabled) {
      return (
        props.theme?.packageShoppingCart?.shoppingCart?.disabledButton
          ?.textColor || props.theme.color.inverseText
      );
    } else if (props.add) {
      return (
        props.theme?.packageShoppingCart?.shoppingCart?.addButton?.textColor ||
        props.theme.color.defaultText
      );
    }
    return (
      props.theme?.packageShoppingCart?.shoppingCart?.removeButton?.textColor ||
      props.theme.color.defaultText
    );
  }};
  background-color: ${(props) => {
    if (props.disabled) {
      return (
        props.theme?.packageShoppingCart?.shoppingCart?.disabledButton
          ?.bgColor || props.theme.color.tertiary
      );
    } else if (props.add) {
      return (
        props.theme?.packageShoppingCart?.shoppingCart?.addButton?.bgColor ||
        props.theme.color.positive
      );
    }
    return (
      props.theme?.packageShoppingCart?.shoppingCart?.removeButton?.bgColor ||
      props.theme.color.negative
    );
  }};
`;

const ButtonText = styled.span`
  padding-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-grow: 1;
  text-align: left;
`;

const ShoppingCartTitle = styled.span`
  align-self: center;
  text-decoration: underline;
  font-weight: bold;
  font-size: 20px;
`;

const getCurrentButtonText = (state: CurrentPackageState) => {
  if (state.type === PackageInfoType.NO_PACKAGE)
    return "No Related Package Found";
  else if (state.type === PackageInfoType.ALREADY_ADDED)
    return `Remove ${state.name}`;
  else return `Add ${state.name}`;
};

export default function ShoppingCartTooltip({
  packages,
  setPackages,
  packageContext,
  determineVersionToInstall,
}: {
  packages: InstallablePackage[];
  setPackages: (
    input: (before: InstallablePackage[]) => InstallablePackage[]
  ) => void;
  packageContext: PackageContext;
  determineVersionToInstall?: PackageShoppingCartParameterConfig["determineVersionToInstall"];
}) {
  const packageInfo = getCurrentPackageState(packageContext, packages);
  return (
    <Root>
      <AddRemoveButton
        add={packageInfo.type === PackageInfoType.NOT_ADDED}
        remove={packageInfo.type === PackageInfoType.ALREADY_ADDED}
        disabled={packageInfo.type === PackageInfoType.NO_PACKAGE}
        onClick={() => {
          if (packageInfo.type === PackageInfoType.NOT_ADDED) {
            setPackages((before) => [
              // Sometimes before is null downstream
              ...(before || []),
              { name: packageInfo.name, version: packageInfo.version },
            ]);
          } else if (packageInfo.type === PackageInfoType.ALREADY_ADDED) {
            setPackages((before) =>
              before.filter(
                (subPkg) =>
                  subPkg.name !== packageInfo.name &&
                  subPkg.version !== packageInfo.version
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
        <ButtonText>{getCurrentButtonText(packageInfo)}</ButtonText>
      </AddRemoveButton>
      <PackageInstallationInstructions
        packages={packages}
        determineVersionToInstall={determineVersionToInstall}
      />
      <ShoppingCartTitle>Package Shopping Cart</ShoppingCartTitle>
      {packages.length === 0 && (
        <span style={{ alignSelf: "center" }}>No Packages in Cart</span>
      )}
      {packages.map((pkg) => {
        return (
          <AddRemoveButton
            key={`${pkg.name}@${pkg.version}`}
            remove
            onClick={() => {
              // using setTimeout because Storybook Tooltip propagates the click after clicking remove
              // and subsequently closes the tooltip
              // stopPropagation & preventDefault did not help here
              setTimeout(
                () =>
                  setPackages((before) =>
                    before.filter(
                      (subPkg) =>
                        subPkg.name !== pkg.name &&
                        subPkg.version !== pkg.version
                    )
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
            <ButtonText>Remove {pkg.name}</ButtonText>
          </AddRemoveButton>
        );
      })}
    </Root>
  );
}
