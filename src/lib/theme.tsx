import {
  Colors,
  ThemeComponents,
  ThemeConfig,
  extendTheme,
} from "@chakra-ui/react";
import { type Styles, mode } from "@chakra-ui/theme-tools";
import { M_PLUS_Rounded_1c } from "next/font/google";

export const nextFont = M_PLUS_Rounded_1c({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

const styles: Styles = {
  global: (props) => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props),
      transitionProperty: "all",
      transitionDuration: "normal",
    },
  }),
};

const components: ThemeComponents = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: `'${nextFont.style.fontFamily}', sans-serif`,
};

const colors: Colors = {
  grassTeal: "#88ccca",
};

const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: "dark",
  disableTransitionOnChange: false,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
