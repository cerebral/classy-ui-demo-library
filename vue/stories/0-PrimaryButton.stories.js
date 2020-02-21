import Vue from "vue";

import PrimaryButton from "../PrimaryButton.vue";

export default { title: "Button" };

export const enabled = () => ({
  components: { PrimaryButton },
  template: "<primary-button>Hello Button</primary-button>"
});

export const disabled = () => ({
  components: { PrimaryButton },
  template: '<primary-button :disabled="true">Hello Button</primary-button>'
});
