<template>
  <container :class="container(size, tokens)">
    <slot></slot>
  </container>
</template>
<script>
import { container } from "../compositions/container";

export default {
  name: "container",
  props: ["size", "tokens"],
  data: () => ({
    container
  })
};
</script>
