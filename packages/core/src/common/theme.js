import StyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import { css, withStyles } from 'react-with-styles';

const unit = 10;

const absolute = {
  height: '100%',
  position: 'absolute',
  width: '100%',
  top: 0,
  left: 0,
};

const breakpoints = {
  small: '@media (max-width: 639px)',
  medium: '@media (max-width: 1047px)',
  large: '@media (min-width: 1048px)',
};

const colors = {
  primary: '#633ca8',
  secondary: '#007bff',
  complementary: '#ff7a00',
  acent: '#00d0d0',
  danger: '#dc3545',
  success: '#28a745',
  warning: '#ffc107',
  grayExtraLight: '#f4f5f7',
  grayLight: '#c1c7d0',
  gray: '#7a869a',
  grayDark: '#505f79',
  grayExtraDark: '#343a40',
};

const sizing = value => ({
  height: value,
  width: value,
});

const fontFamily = "'Open Sans', sans-serif";

const components = {
  alert: {
    backgroundColor: colors.grayExtraLight,
    borderColor: colors.grayLight,
    borderRadius: '0.3em',
    borderSize: 1,
    color: colors.grayDark,
    fontWeight: 'normal',

    injectStyle: {},

    success: {
      backgroundColor: '#e5f9e7',
      borderColor: colors.success,
      color: colors.success,
    },
    warning: {
      backgroundColor: '#fff8db',
      borderColor: colors.warning,
      color: colors.warning,
    },
    danger: {
      backgroundColor: '#ffe8e6',
      borderColor: colors.danger,
      color: colors.danger,
    },
  },
  badge: {
    backgroundColor: colors.grayExtraLight,
    borderRadius: '0.3em',
    color: colors.grayDark,
    fontSize: '1rem',
    fontWeight: '500',
    paddingHorizontal: '0.3em',

    pill: {
      borderRadius: '1em',
      paddingHorizontal: '1em',
    },
    types: {
      color: 'white',
    },
    context: {
      text: {
        fontSize: '0.6em',
        marginHorizontal: '0.65em',
      },
    },
    success: {
      color: colors.grayExtraLight,
    },
    warning: {},
    danger: {},
  },
  badgeClose: {
    iconSize: '2em',
  },
  breadcrumb: {
    separator: {
      color: colors.gray,
    },
    link: {
      color: colors.grayLight,

      current: {
        color: colors.grayExtraDark,
      },
      disabled: {
        color: colors.grayExtraLight,
      },
    },
  },
  breadcrumbToolbar: {
    backgroundColor: 'white',
    borderRadius: 2,
    padding: '0.65em',
  },
  button: {
    backgroundColor: colors.grayExtraLight,
    borderRadius: '0.3em',
    color: colors.grayDark,
    fontSize: '100%',
    marginHorizontal: '0.3em',
  },
  divider: {
    color: colors.grayLight,
  },
  input: {
    borderColor: colors.grayLight,
    borderRadius: 4,
    borderSize: 1,
    fontFamily,
    fontSize: 12,
    boxShadow: {
      color: colors.grayExtraLight,
      offset: 'inset 0 1px 3px',
    },
  },
  label: {
    color: colors.complementary,
    fontFamily,
    fontSize: 14,
    paddingVertical: unit * 0.4,
  },
  spinner: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    child: {
      animationDelay: '0s',
      backgroundColor: colors.primary,
      size: '1.3em',
    },
    tip: {
      color: colors.primary,
      fontFamily,
      fontSize: '0.85em',
      fontWeight: 'bold',
    },
  },
};

StyleSheet.registerTheme({
  breakpoints,
  colors,
  components,
  fontFamily,
  typography: {
    color: colors.grayDark,
    fontSize: unit * 1.4,

    heading: {
      injectStyle: {
        marginBottom: 5,
      },
    },
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '2.25rem',
    },
    h3: {
      fontSize: '2rem',
    },
    h4: {
      fontSize: '1.75rem',
    },
    h5: {
      fontSize: '1.5rem',
    },
    h6: {
      fontSize: '1.25rem',
    },
    italic: {
      color: colors.grayExtraLight,
    },
  },
  unit,
});

StyleSheet.registerInterface(aphroditeInterface);

export default {
  absolute,
  colors,
  css,
  sizing,
  withStyles,
  StyleSheet,
};
