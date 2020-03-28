import { compose, desktop, laptop, mobile, tablet, tokens } from "classy-ui";
import { Device } from "./types";

export type ContainerSize = Device | "fluid";

export const container = (size?: ContainerSize) =>
  compose(
    tokens.width.FULL,
    tokens.padding.SPACE_40,
    tokens.marginLeft.AUTO,
    tokens.marginRight.AUTO,
    (!size || size === "mobile") && mobile(tokens.maxWidth.MOBILE),
    (!size || size === "tablet") && tablet(tokens.maxWidth.TABLET),
    (!size || size === "laptop") && laptop(tokens.maxWidth.LAPTOP),
    (!size || size === "desktop") && desktop(tokens.maxWidth.DESKTOP)
  );
