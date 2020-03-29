import { compose, tokens } from "classy-ui";
import * as React from "react";

import { Container } from "../Container";
import { Example } from "./Example";

export default {
  title: "Container",
  component: Container
};

export const Default = () => (
  <Example code="<Container />">
    <Container tokens={compose(tokens.backgroundColor.BLUE_50)}>
      Size of the current breakpoint
    </Container>
  </Example>
);

export const Small = () => (
  <Example code={`<Container size="sm" />`}>
    <Container size="sm" tokens={compose(tokens.backgroundColor.BLUE_50)}>
      Size of mobile breakpoint
    </Container>
  </Example>
);

export const Medium = () => (
  <Example code={`<Container size="md" />`}>
    <Container size="md" tokens={compose(tokens.backgroundColor.BLUE_50)}>
      Size of tablet breakpoint
    </Container>
  </Example>
);

export const Large = () => (
  <Example code={`<Container size="lg" />`}>
    <Container size="lg" tokens={compose(tokens.backgroundColor.BLUE_50)}>
      Size of laptop breakpoint
    </Container>
  </Example>
);

export const ExtraLarge = () => (
  <Example code={`<Container size="xl" />`}>
    <Container size="xl" tokens={compose(tokens.backgroundColor.BLUE_50)}>
      Size of desktop breakpoint
    </Container>
  </Example>
);

export const Fluid = () => (
  <Example code={`<Container size="fluid" />`}>
    <Container size="fluid" tokens={compose(tokens.backgroundColor.BLUE_50)}>
      Full size
    </Container>
  </Example>
);
