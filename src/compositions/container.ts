import { compose, tokens } from "classy-ui";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "fluid";

export const container = (size?: ContainerSize) =>
  compose(
    size === "fluid" ? tokens.width.FULL : tokens.maxWidth.DESKTOP,
    tokens.boxSizing.BORDER_BOX,
    tokens.padding.SPACE_40,
    tokens.marginLeft.AUTO,
    tokens.marginRight.AUTO,
    size === "sm" && tokens.width.MOBILE,
    size === "md" && tokens.width.TABLET,
    size === "lg" && tokens.width.LAPTOP,
    size === "xl" && tokens.width.DESKTOP
  );
