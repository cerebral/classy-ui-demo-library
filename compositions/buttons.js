import { compose, tokens } from "classy-ui";

export const baseButton = disabled =>
  compose(
    tokens.backgroundColor.GRAY_20,
    tokens.borderRadius.RADIUS_10,
    tokens.borderColor.GRAY_40,
    tokens.color.GRAY_80,
    disabled && tokens.opacity.OPACITY_75
  );

export const primaryButton = disabled =>
  compose(
    baseButton(disabled),
    tokens.backgroundColor.BLUE_50,
    tokens.borderColor.BLUE_70
  );
