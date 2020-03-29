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
  size?: ColumnSize;
  sm?: ColumnSize;
  md?: ColumnSize;
  lg?: ColumnSize;
  xl?: ColumnSize;
  tokens?: TClassname;
};

export const Column: React.FC<ColumnProps> = ({
  size,
  children,
  sm,
  md,
  lg,
  xl,
  tokens
}) => (
  <div
    className={compose(
      typeof size === "number" && column(size),
      sm && column(sm, "mobile"),
      md && column(md, "tablet"),
      lg && column(lg, "laptop"),
      xl && column(xl, "desktop"),
      tokens
    )}
  >
    {children}
  </div>
);
