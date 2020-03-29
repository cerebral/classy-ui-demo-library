import { compose, tokens } from "classy-ui";
import { moduleMetadata } from "@storybook/angular";
import { Container } from "../../src/angular/Container";
import { Example } from "./Example";

export default {
  title: "Container",
  decorators: [
    moduleMetadata({
      declarations: [Container, Example]
    })
  ]
};

export const Default = () => ({
  component: Container,
  template: `<example code="<container></container>"><container tokens="${compose(
    tokens.backgroundColor.BLUE_50
  )}">Size of the current breakpoint</container></example>`
});

export const Small = () => ({
  component: Container,
  template: `<example code='<container size="sm"></container>'><container size="sm" tokens="${compose(
    tokens.backgroundColor.BLUE_50
  )}">Size of mobile breakpoint</container></example>`
});

export const Medium = () => ({
  component: Container,
  template: `<example code='<container size="md"></container>'><container size="md" tokens="${compose(
    tokens.backgroundColor.BLUE_50
  )}">Size of tablet breakpoint</container></example>`
});

export const Large = () => ({
  component: Container,
  template: `<example code='<container size="lg"></container>'><container size="lg" tokens="${compose(
    tokens.backgroundColor.BLUE_50
  )}">Size of laptop breakpoint</container></example>`
});

export const ExtraLarge = () => ({
  component: Container,
  template: `<example code='<container size="xl"></container>'><container size="xl" tokens="${compose(
    tokens.backgroundColor.BLUE_50
  )}">Size of desktop breakpoint</container></example>`
});
