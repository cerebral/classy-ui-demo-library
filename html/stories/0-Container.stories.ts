import { example } from "./example";
import { container } from "../../compositions/container";
import { compose, tokens } from "classy-ui";

export default { title: "Container" };

export const Default = () =>
  example(
    '`<div class="${container()}"></div>`',
    `<div class="${compose(
      container(),
      tokens.backgroundColor.BLUE_50
    )}">Size of the current breakpoint</div>`
  );

export const Small = () =>
  example(
    '`<div class="${container("sm")}"></div>`',
    `<div class="${compose(
      container("sm"),
      tokens.backgroundColor.BLUE_50
    )}">Size of mobile breakpoint</div>`
  );

export const Medium = () =>
  example(
    '`<div class="${container("md")}"></div>`',
    `<div class="${compose(
      container("md"),
      tokens.backgroundColor.BLUE_50
    )}">Size of tablet breakpoint</div>`
  );

export const Large = () =>
  example(
    '`<div class="${container("lg")}"></div>`',
    `<div class="${compose(
      container("lg"),
      tokens.backgroundColor.BLUE_50
    )}">Size of laptop breakpoint</div>`
  );

export const ExtraLarge = () =>
  example(
    '`<div class="${container("xl")}"></div>`',
    `<div class="${compose(
      container("xl"),
      tokens.backgroundColor.BLUE_50
    )}">Size of desktop breakpoint</div>`
  );
