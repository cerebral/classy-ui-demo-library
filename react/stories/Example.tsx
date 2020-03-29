import * as React from "react";
import { compose, tokens } from "classy-ui";

export const Example: React.FC<{ code: string }> = ({ code, children }) => (
  <div className={compose(tokens.margin.SPACE_40)}>
    <pre
      className={compose(
        tokens.borderColor.BLUE_50,
        tokens.borderWidth.WIDTH_2,
        tokens.borderStyle.SOLID,
        tokens.padding.SPACE_40,
        tokens.display.BLOCK
      )}
    >
      {code}
    </pre>
    <div className={compose(tokens.marginTop.SPACE_50)}>{children}</div>
  </div>
);
