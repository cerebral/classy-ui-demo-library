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
<Row>
  <Column size={1}>Flex 1</Column>
  <Column size={1}>Flex 1</Column>
  <Column size={1}>Flex 1</Column>
  <Column size={1}>Flex 1</Column>
  <Column size={1}>Flex 1</Column>
  <Column size={1}>Flex 1</Column>
  <Column size={1}>Flex 1</Column>
  <Column size={1}>Flex 1</Column>
  <Column size={1}>Flex 1</Column>
  <Column size={1}>Flex 1</Column>
  <Column size={1}>Flex 1</Column>
  <Column size={1}>Flex 1</Column>
</Row>
`}
    >
      <Row
        tokens={compose(
          tokens.backgroundColor.BLUE_50,
          tokens.padding.SPACE_40
        )}
      >
        <Column size={1}>Flex 1</Column>
        <Column size={1}>Flex 1</Column>
        <Column size={1}>Flex 1</Column>
        <Column size={1}>Flex 1</Column>
        <Column size={1}>Flex 1</Column>
        <Column size={1}>Flex 1</Column>
        <Column size={1}>Flex 1</Column>
        <Column size={1}>Flex 1</Column>
        <Column size={1}>Flex 1</Column>
        <Column size={1}>Flex 1</Column>
        <Column size={1}>Flex 1</Column>
        <Column size={1}>Flex 1</Column>
      </Row>
    </Example>
    <Example
      code={`
<Row>
  <Column size={8}>Flex 8</Column>
  <Column size={4}>Flex 4</Column>
</Row>
`}
    >
      <Row
        tokens={compose(
          tokens.backgroundColor.BLUE_50,
          tokens.padding.SPACE_40
        )}
      >
        <Column size={8}>Flex 8</Column>
        <Column size={4}>Flex 4</Column>
      </Row>
    </Example>
    <Example
      code={`
<Row>
  <Column size={8} xl={4}>Flex 8 up to desktop where flex is 4</Column>
  <Column size={4}>Always flex 4</Column>
</Row>
`}
    >
      <Row
        tokens={compose(
          tokens.backgroundColor.BLUE_50,
          tokens.padding.SPACE_40
        )}
      >
        <Column size={8} xl={4}>
          Flex 8 up to desktop where flex is 4
        </Column>
        <Column size={4}>Always flex 4</Column>
      </Row>
    </Example>
  </div>
);
