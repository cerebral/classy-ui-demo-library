import {
  TClassname,
  compose,
  desktop,
  laptop,
  mobile,
  tablet
} from "classy-ui";
import * as React from "react";

import { ColumnSize, column, row } from "../compositions/grid";

type RowProps = {
  tokens?: TClassname;
};

export const Row: React.FC<RowProps> = ({ children, tokens }) => (
  <div className={compose(row(), tokens)}>{children}</div>
);

type ColumnProps = {
  size?:
    | ColumnSize
    | {
        default?: ColumnSize;
        mobile?: ColumnSize;
        tablet?: ColumnSize;
        laptop?: ColumnSize;
        desktop?: ColumnSize;
      };
  tokens?: TClassname;
};

export const Column: React.FC<ColumnProps> = ({ children, size, tokens }) => (
  <div
    className={compose(
      typeof size === "undefined" && column(),
      typeof size === "number" && column(size),
      typeof size === "object" && size.default && column(size.default),
      typeof size === "object" && size.mobile && column(size.mobile, "mobile"),
      typeof size === "object" && size.tablet && column(size.tablet, "tablet"),
      typeof size === "object" && size.laptop && column(size.laptop, "laptop"),
      typeof size === "object" &&
        size.desktop &&
        column(size.desktop, "desktop"),
      tokens
    )}
  >
    {children}
  </div>
);

/*
  function screen() {

  }
*/
