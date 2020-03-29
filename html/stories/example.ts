import { compose, tokens } from "classy-ui";
import he from "he";

export const example = (
  code: string,
  template: string
) => `<div class="${compose(tokens.margin.SPACE_40)}">
  <pre class="${compose(
    tokens.borderColor.BLUE_50,
    tokens.borderWidth.WIDTH_2,
    tokens.borderStyle.SOLID,
    tokens.padding.SPACE_40,
    tokens.display.BLOCK
  )}">${he.encode(code)}</pre>
  <div class="${compose(tokens.marginTop.SPACE_50)}">${template}</div>
</div>`;
