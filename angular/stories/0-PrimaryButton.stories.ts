import { PrimaryButton } from "../PrimaryButton";

export default { title: "My Button" };

export const enabled = () => ({
  component: PrimaryButton,
  props: {
    text: "Hello Button"
  }
});

export const disabled = () => ({
  component: PrimaryButton,
  props: {
    text: "Hello Button",
    disabled: true
  }
});
