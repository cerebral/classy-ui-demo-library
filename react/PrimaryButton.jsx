import React from "react";

import { primaryButton } from "../compositions/buttons";

export const PrimaryButton = ({ children, disabled }) => (
  <button className={primaryButton(disabled)} disabled={disabled}>
    {children}
  </button>
);
