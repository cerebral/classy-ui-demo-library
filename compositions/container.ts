import { compose, desktop, laptop, mobile, tablet, tokens } from "classy-ui";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "fluid";

export const container = (size?: ContainerSize) =>
  compose(
    size === "fluid" ? tokens.width.FULL : tokens.maxWidth.DESKTOP,
    tokens.padding.SPACE_40,
    tokens.marginLeft.AUTO,
    tokens.marginRight.AUTO,
    (!size || size === "sm") && mobile(tokens.maxWidth.MOBILE),
    (!size || size === "md") && tablet(tokens.maxWidth.TABLET),
    (!size || size === "lg") && laptop(tokens.maxWidth.LAPTOP),
    (!size || size === "xl") && desktop(tokens.maxWidth.DESKTOP)
  );
