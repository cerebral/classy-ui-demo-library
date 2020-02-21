import { c } from "classy-ui";

export const baseButton = disabled =>
  c(
    "background-color-gray-200",
    "border-radius-sm",
    "border-color-gray-400",
    "color-gray-800",
    {
      "opacity-75": disabled
    }
  );

export const primaryButton = disabled =>
  c(baseButton(disabled), "background-color-blue-500", "border-color-blue-700");
