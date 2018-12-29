import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { omit } from 'underscore';

import { css, withStyles } from '~/common/theme';

import { ButtonGroupContext } from './ButtonGroup';
import { ButtonToolbarContext } from './ButtonToolbar';

class Button extends Component {
  state = {};

  handlePress = ev => {
    ev.preventDefault();

    if (typeof this.props.onClick === 'function') {
      this.props.onClick();
      return;
    }

    this.props.onPress();
  };

  render() {
    const {
      children, fluid, size, styles, type,
    } = this.props;

    const style = [];

    style.push(styles.button);

    if (fluid) style.push(styles.button__fluid);

    if (/xl|lg|sm|xs/.test(size)) {
      style.push(styles[`button__${size}`]);
    }

    if (/primary|success|warning|danger|link/.test(type)) {
      style.push(styles[`button__${type}`]);
    }

    const propagateProps = omit(
      this.props,
      ...['className', 'css', 'fluid', 'onPress', 'onClick', 'size', 'styles', 'theme', 'type'],
    );

    return (
      <ButtonToolbarContext.Consumer>
        {({ spacing }) => (
          <ButtonGroupContext.Consumer>
            {({ groupExists }) => {
              if (groupExists === false && spacing) style.push(styles.button__spacing);
              return (
                <button
                  onClick={this.handlePress}
                  type="button"
                  {...css(style)}
                  {...propagateProps}
                >
                  {children}
                </button>
              );
            }}
          </ButtonGroupContext.Consumer>
        )}
      </ButtonToolbarContext.Consumer>
    );
  }
}

Button.defaultProps = {
  first: false,
  fluid: false,
  last: false,
  onClose: () => {},
  onPress: () => {},
  size: false,
  type: false,
};

Button.propTypes = {
  /**
   * Boolean when in a ButtonGroup is a first child.
   *
   * @type {boolean}
   */
  first: PropTypes.bool,

  fluid: PropTypes.bool,

  /**
   * Boolean when in a ButtonGroup is a last child.
   *
   * @type {boolean}
   */
  last: PropTypes.bool,

  onClose: PropTypes.func,
  onPress: PropTypes.func,

  /**
   * The badges size options.
   *
   * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'}
   */
  size: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /**
   * The reason for alert and styled.
   *
   * @type {'success' | 'danger' | 'warning'}
   */
  type: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

const styles = ({ components, colors, fontFamily }) => {
  const { button } = components;
  const {
    backgroundColor, borderRadius, color, fontSize, marginHorizontal,
  } = button;
  return {
    button: {
      alignItems: 'center',
      backgroundColor,
      border: '1px solid transparent',
      borderRadius,
      color,
      cursor: 'pointer',
      display: 'flex',
      fontFamily,
      fontSize,
      fontWeight: '500',
      height: '2.4em',
      justifyContent: 'center',
      lineHeight: '2.3em',
      margin: 0,
      outline: 'none',
      overflow: 'hidden',
      padding: '0 1em',
      textAlign: 'center',
      touchAction: 'manipulation',
      userSelect: 'none',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',

      ':hover': {
        opacity: 0.8,
      },
    },
    button__groupContext: {},
    button__toolbarContext: {
      margin: 0,
    },
    button__spacing: {
      margin: `0 ${marginHorizontal}`,
    },
    button__fluid: {
      width: '100%',
    },
    button__xs: {
      fontSize: '70%',
    },
    button__sm: {
      fontSize: '85%',
    },
    button__lg: {
      fontSize: '110%',
    },
    button__xl: {
      fontSize: '125%',
    },
    button__primary: {
      backgroundColor: colors.primary,
      color: 'white',
    },
    button__success: {
      backgroundColor: colors.success,
      color: 'white',
    },
    button__warning: {
      backgroundColor: colors.warning,
      color: 'white',
    },
    button__danger: {
      backgroundColor: colors.danger,
      color: 'white',
    },
    button__link: {
      backgroundColor: 'transparent',
      color: '#007bff',

      ':hover': {
        textDecoration: 'underline',
      },
    },
  };
};

export default withStyles(styles)(Button);
