import { compose, tokens } from "classy-ui";
import * as React from "react";

import { Column, Row } from "../Grid";
import { Example } from "./Example";

export default {
  title: "Grid",
  component: Row
};

export const Types = () => (
  <div>
    <Example
      code={`
<Row tokens={compose(tokens.backgroundColor.BLUE_20)}>
  <Column size={1}>Size 2</Column>
  <Column
    size={{ default: 1, mobile: 2, tablet: 4, laptop: 8, desktop: 12 }}
  >
    Depends
  </Column>
</Row>
`}
    >
      <Row
        tokens={compose(
          tokens.backgroundColor.BLUE_50,
          tokens.padding.SPACE_40
        )}
      >
        <Column size={1}>Size 2</Column>
        <Column
          size={{ default: 1, mobile: 2, tablet: 4, laptop: 8, desktop: 12 }}
        >
          Depends
        </Column>
      </Row>
    </Example>
  </div>
);
