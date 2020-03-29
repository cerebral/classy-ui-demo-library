<template>
  <div :class="classes.container">
    <pre :class="classes.pre">{{code}}</pre>
    <div :class="classes.code">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { compose, tokens } from "classy-ui";

export default {
  name: "example",
  props: ["code"],
  data: () => ({
    classes: {
      container: compose(tokens.margin.SPACE_40),
      pre: compose(
        tokens.borderColor.BLUE_50,
        tokens.borderWidth.WIDTH_2,
        tokens.borderStyle.SOLID,
        tokens.padding.SPACE_40,
        tokens.display.BLOCK
      ),
      code: compose(tokens.marginTop.SPACE_50)
    }
  })
};
</script>
