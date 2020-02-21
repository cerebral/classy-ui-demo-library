import React from "react";

import { PrimaryButton } from "../PrimaryButton";

export default {
  title: "PrimaryButton",
  component: PrimaryButton
};

export const Enabled = () => <PrimaryButton>Hello Button</PrimaryButton>;

export const Disabled = () => (
  <PrimaryButton disabled>Hello Button</PrimaryButton>
);
