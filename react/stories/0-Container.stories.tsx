import { compose, tokens } from "classy-ui";
import * as React from "react";

import { Container } from "../Container";
import { Example } from "./Example";

export default {
  title: "Container",
  component: Container
};

export const Types = () => (
  <div>
    <Example code={`<Container />`}>
      <Container tokens={compose(tokens.backgroundColor.BLUE_50)}>
        Size of the current breakpoint
      </Container>
    </Example>
    <Example code={`<Container size="mobile" />`}>
      <Container size="mobile" tokens={compose(tokens.backgroundColor.BLUE_50)}>
        Size of mobile breakpoint
      </Container>
    </Example>
    <Example code={`<Container size="tablet" />`}>
      <Container size="tablet" tokens={compose(tokens.backgroundColor.BLUE_50)}>
        Size of tablet breakpoint
      </Container>
    </Example>
    <Example code={`<Container size="laptop" />`}>
      <Container size="laptop" tokens={compose(tokens.backgroundColor.BLUE_50)}>
        Size of laptop breakpoint
      </Container>
    </Example>
    <Example code={`<Container size="desktop" />`}>
      <Container
        size="desktop"
        tokens={compose(tokens.backgroundColor.BLUE_50)}
      >
        Size of desktop breakpoint
      </Container>
    </Example>
    <Example code={`<Container size="fluid" />`}>
      <Container size="fluid" tokens={compose(tokens.backgroundColor.BLUE_50)}>
        Full size
      </Container>
    </Example>
  </div>
);
