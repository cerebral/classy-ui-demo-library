import { primaryButton } from "../../compositions/buttons";

export default { title: "PrimaryButton" };

export const enabled = () =>
  `<button class="${primaryButton(false)}">Hello Button</button>`;

export const disabled = () =>
  `<button class="${primaryButton(true)}" disabled>Hello Button</button>`;
