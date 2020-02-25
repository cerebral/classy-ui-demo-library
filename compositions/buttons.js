import { compose, tokens } from "classy-ui";

export const baseButton = disabled =>
  compose(
    tokens.backgroundColor.GRAY_200,
    tokens.borderRadius.SMALL,
    tokens.borderColor.GRAY_400,
    tokens.color.GRAY_800,
    disabled && tokens.opacity.OPACITY_75
  );

export const primaryButton = disabled =>
  compose(
    baseButton(disabled),
    tokens.backgroundColor.BLUE_500,
    tokens.borderColor.BLUE_700
  );
