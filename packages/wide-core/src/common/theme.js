import StyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite";
import { css, withStyles } from "react-with-styles";

const unit = 10;

const breakpoints = {
  small: "@media (max-width: 639px)",
  medium: "@media (max-width: 1047px)",
  large: "@media (min-width: 1048px)"
};

const colors = {
  primary: "#007bff",
  complementary: "#6c757d",
  acent: "#D97933",
  danger: "#dc3545",
  success: "#28a745",
  warning: "#ffc107",
  grayExtraLight: "#e2d6d4",
  grayLight: "#bdaeac",
  gray: "#8C7B79",
  grayDark: "#343a40"
};

const fontFamily = "'Open Sans', sans-serif";

const components = {
  input: {
    borderColor: colors.grayLight,
    borderRadius: 4,
    borderSize: 1,
    fontFamily,
    fontSize: 12,
    boxShadow: {
      color: colors.grayExtraLight,
      offset: "inset 0 1px 3px"
    }
  },
  label: {
    color: colors.complementary,
    fontFamily,
    fontSize: 14,
    paddingVertical: unit * 0.4
  }
};

StyleSheet.registerTheme({
  breakpoints,
  colors,
  components: {
    ...components
  },
  fontFamily,
  text: {
    color: colors.primary,
    size: unit * 1.4
  },
  unit
});

StyleSheet.registerInterface(aphroditeInterface);

export default { colors, css, withStyles, StyleSheet };
