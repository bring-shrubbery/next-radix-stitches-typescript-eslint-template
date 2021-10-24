import { createStitches } from "@stitches/react";

import { gray, blue, red, green, orange, purple } from "@radix-ui/colors";
import {
  grayDark,
  blueDark,
  redDark,
  greenDark,
  orangeDark,
  purpleDark,
} from "@radix-ui/colors";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      ...gray,
      ...blue,
      ...red,
      ...green,
      ...orange,
      ...purple,
    },
    space: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
    },
    sizes: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
      4: "17px",
      5: "19px",
      6: "21px",
    },
    fonts: {
      system: "system-ui",
    },
  },
  utils: {
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    sm: "(min-width: 30em)",
    md: "(min-width: 48em)",
    lg: "(min-width: 62em)",
    xl: "(min-width: 80em)",
    "2xl": "(min-width: 96em)",
  },
});

export const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...orangeDark,
    ...purpleDark,
  },
});
