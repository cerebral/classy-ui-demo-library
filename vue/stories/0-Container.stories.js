import Vue from "vue";

import Container from "../../src/vue/Container.vue";
import Example from "./Example.vue";
import { compose, tokens } from "classy-ui";

export default { title: "Container" };

export const Default = () => ({
  components: { Container, Example },
  template: `<example code="<container />"><container tokens="${compose(
    tokens.backgroundColor.BLUE_50
  )}">Max size is desktop breakpoint</container></example>`,
});

export const Small = () => ({
  components: { Container, Example },
  template: `<example code='<container size="sm" />'><container size="sm" tokens="${compose(
    tokens.backgroundColor.BLUE_50
  )}">Size of mobile breakpoint</container></example>`,
});

export const Medium = () => ({
  components: { Container, Example },
  template: `<example code='<container size="md" />'><container size="md" tokens="${compose(
    tokens.backgroundColor.BLUE_50
  )}">Size of tablet breakpoint</container></example>`,
});

export const Large = () => ({
  components: { Container, Example },
  template: `<example code='<container size="lg" />'><container size="lg" tokens="${compose(
    tokens.backgroundColor.BLUE_50
  )}">Size of laptop breakpoint</container></example>`,
});

export const ExtraLarge = () => ({
  components: { Container, Example },
  template: `<example code='<container size="xl" />'><container size="xl" tokens="${compose(
    tokens.backgroundColor.BLUE_50
  )}">Size of desktop breakpoint</container></example>`,
});

export const Fluid = () => ({
  components: { Container, Example },
  template: `<example code='<container size="fluid" />'><container size="fluid" tokens="${compose(
    tokens.backgroundColor.BLUE_50
  )}">Full size</container></example>`,
});
