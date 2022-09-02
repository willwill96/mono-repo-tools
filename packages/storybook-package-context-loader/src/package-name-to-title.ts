function removeScoping(pkgName: string) {
  const slashIndex = pkgName.indexOf("/");
  if (slashIndex === -1) return pkgName;
  return pkgName.slice(slashIndex + 1);
}

function titleCase(value: string) {
  return value
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function packageNameToTitle(pkgName: string) {
  return titleCase(removeScoping(pkgName).replaceAll("-", " "));
}
