import * as React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { tokens, compose } from "classy-ui";

export const Example: React.FC<{ code: string }> = ({ code, children }) => (
  <div className={compose(tokens.padding.SPACE_50)}>
    <SyntaxHighlighter language="javascript" style={vs}>
      {code}
    </SyntaxHighlighter>
    <div>{children}</div>
  </div>
);
