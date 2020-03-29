<template>
  <div :class="container">
    <slot></slot>
  </div>
</template>
<script>
import { container } from "../compositions/container";
import { compose } from "classy-ui";

export default {
  name: "container",
  props: ["size", "tokens"],
  data: component => ({
    container: compose(container(component.size), component.tokens)
  })
};
</script>
