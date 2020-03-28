import { compose, tokens, mobile, tablet, laptop, desktop } from "classy-ui";

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const getColumnsByDevice = {
  all: [
    compose(tokens.flexGrow.FLEX_10),
    compose(tokens.flexGrow.FLEX_20),
    compose(tokens.flexGrow.FLEX_30),
    compose(tokens.flexGrow.FLEX_40),
    compose(tokens.flexGrow.FLEX_50),
    compose(tokens.flexGrow.FLEX_60),
    compose(tokens.flexGrow.FLEX_70),
    compose(tokens.flexGrow.FLEX_80),
    compose(tokens.flexGrow.FLEX_90),
    compose(tokens.flexGrow.FLEX_100),
    compose(tokens.flexGrow.FLEX_110),
    compose(tokens.flexGrow.FLEX_120)
  ],
  mobile: [
    mobile(tokens.flexGrow.FLEX_10),
    mobile(tokens.flexGrow.FLEX_20),
    mobile(tokens.flexGrow.FLEX_30),
    mobile(tokens.flexGrow.FLEX_40),
    mobile(tokens.flexGrow.FLEX_50),
    mobile(tokens.flexGrow.FLEX_60),
    mobile(tokens.flexGrow.FLEX_70),
    mobile(tokens.flexGrow.FLEX_80),
    mobile(tokens.flexGrow.FLEX_90),
    mobile(tokens.flexGrow.FLEX_100),
    mobile(tokens.flexGrow.FLEX_110),
    mobile(tokens.flexGrow.FLEX_120)
  ],
  tablet: [
    tablet(tokens.flexGrow.FLEX_10),
    tablet(tokens.flexGrow.FLEX_20),
    tablet(tokens.flexGrow.FLEX_30),
    tablet(tokens.flexGrow.FLEX_40),
    tablet(tokens.flexGrow.FLEX_50),
    tablet(tokens.flexGrow.FLEX_60),
    tablet(tokens.flexGrow.FLEX_70),
    tablet(tokens.flexGrow.FLEX_80),
    tablet(tokens.flexGrow.FLEX_90),
    tablet(tokens.flexGrow.FLEX_100),
    tablet(tokens.flexGrow.FLEX_110),
    tablet(tokens.flexGrow.FLEX_120)
  ],
  laptop: [
    laptop(tokens.flexGrow.FLEX_10),
    laptop(tokens.flexGrow.FLEX_20),
    laptop(tokens.flexGrow.FLEX_30),
    laptop(tokens.flexGrow.FLEX_40),
    laptop(tokens.flexGrow.FLEX_50),
    laptop(tokens.flexGrow.FLEX_60),
    laptop(tokens.flexGrow.FLEX_70),
    laptop(tokens.flexGrow.FLEX_80),
    laptop(tokens.flexGrow.FLEX_90),
    laptop(tokens.flexGrow.FLEX_100),
    laptop(tokens.flexGrow.FLEX_110),
    laptop(tokens.flexGrow.FLEX_120)
  ],
  desktop: [
    desktop(tokens.flexGrow.FLEX_10),
    desktop(tokens.flexGrow.FLEX_20),
    desktop(tokens.flexGrow.FLEX_30),
    desktop(tokens.flexGrow.FLEX_40),
    desktop(tokens.flexGrow.FLEX_50),
    desktop(tokens.flexGrow.FLEX_60),
    desktop(tokens.flexGrow.FLEX_70),
    desktop(tokens.flexGrow.FLEX_80),
    desktop(tokens.flexGrow.FLEX_90),
    desktop(tokens.flexGrow.FLEX_100),
    desktop(tokens.flexGrow.FLEX_110),
    desktop(tokens.flexGrow.FLEX_120)
  ]
};

export const column = (
  size: ColumnSize = 1,
  device?: "mobile" | "tablet" | "laptop" | "desktop"
) => {
  return getColumnsByDevice[device || "all"][size - 1];
};

export const row = () => compose(tokens.display.FLEX);
