import React, { Component } from 'react';
import PropTypes from 'prop-types';
import X from 'react-feather/dist/icons/x';
import { omit } from 'underscore';

import { css, withStyles } from '~/common/theme';
import { TextContext } from './Text';

class Badge extends Component {
  state = {};

  onClear = ev => {
    ev.preventDefault();
    this.props.onClear();
  };

  renderCloseIcon(style) {
    const {
      removable, styles, theme, type,
    } = this.props;

    const { color } = (() => {
      // Dark colors;
      if (/primary|success|warning|danger|link/.test(type)) {
        return theme.components.badge.types;
      }

      return theme.components.badge;
    })();

    if (removable === false) return null;

    return (
      <span
        {...css(style)}
        onClick={this.onClear}
        role="presentation"
      >
        <X {...css(styles.badgeCloseIcon)} color={color} size={16} />
      </span>);
  }

  render() {
    const {
      children, pill, removable, size, styles, type,
    } = this.props;

    const style = [];
    const styleClose = [];

    style.push(styles.badge);
    styleClose.push(styles.badgeClose);

    if (pill) {
      style.push(styles.badge__pill);
      styleClose.push(styles.badgeClose__pill);
    }

    if (removable) style.push(styles.badge__removable);

    if (/lg|md|sm/.test(size)) {
      style.push(styles[`badge__${size}`]);
      styleClose.push(styles[`badgeClose__${size}`]);
    }

    if (/primary|success|warning|danger|link/.test(type)) {
      style.push(styles[`badge__${type}`]);
      styleClose.push(styles[`badge__${type}`]);
    }

    const propagateProps = omit(
      this.props,
      ...[
        'className',
        'css',
        'onClear',
        'pill',
        'removable',
        'size',
        'styles',
        'theme',
        'type',
      ],
    );

    return (
      <TextContext.Consumer>
        {textContext => {
          if (typeof textContext !== 'undefined') style.push(styles.badge__textContext);

          return (
            <span {...css(styles.container)}>
              <span {...css(styles.content)}>
                <span {...css(style)} {...propagateProps}>
                  {children}
                </span>
                {this.renderCloseIcon(styleClose)}
              </span>
            </span>
          );
        }}
      </TextContext.Consumer>
    );
  }
}

Badge.defaultProps = {
  onClear: () => {},
  pill: false,
  removable: false,
  size: false,
  type: false,
};

Badge.propTypes = {
  onClear: PropTypes.func,
  pill: PropTypes.bool,
  removable: PropTypes.bool,

  /**
   * The badges size options.
   *
   * @type {'sm' | 'md' | 'lg'}
   */
  size: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /**
   * The badges styled options.
   *
   * @type {'primary' | 'success' | 'danger' | 'warning'}
   */
  type: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

const styles = ({ components, colors, fontFamily }) => {
  const { badge } = components;

  return {
    container: {
      display: 'inline-block',
      margin: 0,
      padding: 0,
    },
    content: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      margin: 0,
      padding: 0,
    },
    badge: (() => {
      const {
        backgroundColor, borderRadius, color, fontSize, fontWeight, paddingHorizontal,
      } = badge;

      return {
        alignItems: 'center',
        backgroundColor,
        border: '1px solid transparent',
        borderRadius,
        color,
        display: 'flex',
        fontFamily,
        fontSize,
        fontWeight,
        justifyContent: 'center',
        overflow: 'hidden',
        padding: `0 ${paddingHorizontal} 0.1em`,
        textAlign: 'center',
        userSelect: 'none',
        verticalAlign: 'middle',
        whiteSpace: 'nowrap',
      };
    })(),
    badge__textContext: (() => {
      const { fontSize, marginHorizontal } = badge.context.text;
      return {
        fontSize,
        margin: `0 ${marginHorizontal}`,
      };
    })(),
    badge__removable: {
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
    },
    badge__pill: (() => {
      const { borderRadius, paddingHorizontal } = badge.pill;
      return {
        borderRadius,
        padding: `0 ${paddingHorizontal}`,
      };
    })(),
    badge__sm: {
      fontSize: '0.7rem',
    },
    badge__md: {
      fontSize: '1rem',
    },
    badge__lg: {
      fontSize: '1.3rem',
    },
    badge__primary: {
      backgroundColor: colors.primary,
      color: badge.types.color,
    },
    badge__success: {
      backgroundColor: colors.success,
      color: badge.types.color,
    },
    badge__warning: {
      backgroundColor: colors.warning,
      color: badge.types.color,
    },
    badge__danger: {
      backgroundColor: colors.danger,
      color: badge.types.color,
    },
    badgeClose: (() => {
      const {
        backgroundColor, color, fontSize,
      } = badge;

      return {
        alignItems: 'center',
        backgroundColor,
        border: '1px solid transparent',
        color,
        cursor: 'pointer',
        display: 'flex',
        fontSize,
        justifyContent: 'center',
        marginLeft: '3px',
        overflow: 'hidden',
        padding: '0 8px 0 5px',
        textAlign: 'center',
        userSelect: 'none',
        verticalAlign: 'middle',
        whiteSpace: 'nowrap',

        ':hover': {
          opacity: 0.8,
        },
      };
    })(),
    badgeClose__pill: {
      borderBottomRightRadius: badge.pill.borderRadius,
      borderTopRightRadius: badge.pill.borderRadius,
    },
    badgeClose__sm: {
      marginLeft: '2px',
    },
  };
};

export default withStyles(styles)(Badge);
