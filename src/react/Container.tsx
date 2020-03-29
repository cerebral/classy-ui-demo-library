import { TClassname, compose } from "classy-ui";
import * as React from "react";

import { ContainerSize, container } from "../compositions/container";

type Props = {
  size?: ContainerSize;
  tokens?: TClassname;
};

export const Container: React.FC<Props> = ({ children, size, tokens }) => (
  <div className={compose(container(size), tokens)}>{children}</div>
);
