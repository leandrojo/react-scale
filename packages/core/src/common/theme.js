import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import hoistNonReactStatics from 'hoist-non-react-statics';

import { mergeDeep } from './mergeDeep';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

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

const fontFamily = "'Open Sans', sans-serif";

const typography = {
  color: 'black',
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
    color: 'black',
  },
};

function components(theme = {}) {
  return {
    alert: {
      backgroundColor: theme.colors.grayExtraLight,
      borderColor: theme.colors.grayLight,
      borderRadius: '0.3em',
      borderSize: 1,
      color: theme.colors.grayDark,
      fontWeight: 'normal',

      injectStyle: {},

      success: {
        backgroundColor: '#e5f9e7',
        borderColor: theme.colors.success,
        color: theme.colors.success,
      },
      warning: {
        backgroundColor: '#fff8db',
        borderColor: theme.colors.warning,
        color: theme.colors.warning,
      },
      danger: {
        backgroundColor: '#ffe8e6',
        borderColor: theme.colors.danger,
        color: theme.colors.danger,
      },
    },
    badge: {
      backgroundColor: theme.colors.grayExtraLight,
      borderRadius: '0.3em',
      color: theme.colors.grayDark,
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
        color: theme.colors.grayExtraLight,
      },
      warning: {},
      danger: {},
    },
    badgeClose: {
      iconSize: '2em',
    },
    breadcrumb: {
      separator: {
        color: theme.colors.gray,
      },
      link: {
        color: theme.colors.grayLight,

        current: {
          color: theme.colors.grayExtraDark,
        },
        disabled: {
          color: theme.colors.grayExtraLight,
        },
      },
    },
    breadcrumbToolbar: {
      backgroundColor: 'white',
      borderRadius: 2,
      padding: '0.65em',
    },
    button: {
      backgroundColor: theme.colors.grayExtraLight,
      borderRadius: '0.3em',
      color: theme.colors.grayDark,
      fontSize: '100%',
      marginHorizontal: '0.3em',
    },
    divider: {
      color: theme.colors.grayLight,
    },
    input: {
      borderColor: theme.colors.grayLight,
      borderRadius: 4,
      borderSize: 1,
      fontFamily,
      fontSize: 12,
      boxShadow: {
        color: theme.colors.grayExtraLight,
        offset: 'inset 0 1px 3px',
      },
    },
    label: {
      color: theme.colors.complementary,
      fontFamily,
      fontSize: 14,
      paddingVertical: unit * 0.4,
    },
    spinner: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      child: {
        animationDelay: '0s',
        backgroundColor: theme.colors.primary,
        size: '1.3em',
      },
      tip: {
        color: theme.colors.primary,
        fontFamily,
        fontSize: '0.85em',
        fontWeight: 'bold',
      },
    },
  };
}

const defaultTheme = {
  absolute,
  breakpoints,
  colors,
  components: components({ colors }),
  fontFamily,
  typography,
  unit,
};

const sizing = value => ({
  height: value,
  width: value,
});

class Theming {
  constructor(initialState = {}) {
    this.theme = initialState;

    this.registerTheme = this.registerTheme.bind(this);
    this.withStyles = this.withStyles.bind(this);
  }

  registerTheme(sources, next = () => {}) {
    this.theme = mergeDeep(this.theme, sources);
    this.theme = mergeDeep(this.theme, { components: components(sources) });

    next();

    return this.theme;
  }

  withStyles(styles) {
    const current = this.theme;

    return WrappedComponent => {
      const WithStyles = props => (
        <WrappedComponent {...props} theme={current} styles={StyleSheet.create(styles(current))} />
      );

      // Helper for debugger.
      WithStyles.displayName = `WithStyles(${getDisplayName(WrappedComponent)})`;

      return hoistNonReactStatics(WithStyles, WrappedComponent);
    };
  }
}

const { registerTheme, withStyles } = new Theming(defaultTheme);

export default {
  colors,
  css: style => ({ className: css(style) }),
  registerTheme,
  sizing,
  withStyles,
  StyleSheet,
};
