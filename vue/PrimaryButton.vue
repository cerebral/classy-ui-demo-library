<template>
  <button :disabled="disabled" :class="primaryButton(disabled)">
    <slot></slot>
  </button>
</template>
<script>
import { primaryButton } from "../compositions/buttons";

export default {
  name: "primaryButton",
  props: ["disabled"],
  data: () => ({
    primaryButton
  })
};
</script>
