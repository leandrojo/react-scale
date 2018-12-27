import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'react-feather';
import { omit } from 'underscore';

import { css, withStyles } from '~/common/theme';

import Text from './Text';
import View from './View';

class Alert extends Component {
  onClose = () => {
    this.props.onClose();
  };

  renderCloseIcon() {
    const { closable, styles, theme } = this.props;
    const { color } = theme.components.alert;

    if (closable === false) return null;

    return (
      <span {...css(styles.close)}>
        <Icons.X {...css(styles.closeIcon)} color={color} size={16} />
      </span>
    );
  }

  render() {
    const {
      children, styles, type, visible,
    } = this.props;

    const style = [];

    if (visible === false) return null;

    style.push(styles.alert);

    if (/primary|success|warning|danger|link/.test(type)) {
      style.push(styles[`alert__${type}`]);
    }

    const propagateProps = omit(
      this.props,
      ...['children', 'className', 'css', 'onClose', 'visible', 'styles', 'theme', 'type'],
    );

    const Content = props => (
      <View {...css(style)} {...propagateProps}>
        {props.children}
        {this.renderCloseIcon()}
      </View>
    );

    if (typeof children === 'string') {
      return (
        <Content>
          <Text>{children}</Text>
        </Content>
      );
    }

    return <Content>{children}</Content>;
  }
}

Alert.defaultProps = {
  children: null,
  closable: false,
  visible: true,
  type: false,
};

Alert.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  closable: PropTypes.bool,
  visible: PropTypes.bool,

  /**
   * The reason for alert and your styled.
   *
   * @type {'success' | 'danger' | 'warning'}
   */
  type: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

const styles = ({ components, unit }) => {
  const { alert } = components;
  const { borderRadius, borderSize } = alert;

  return {
    content: {
      boxSizing: 'content-box',
    },
    alert: (() => {
      const { backgroundColor, borderColor, color } = alert;
      return {
        backgroundColor,
        border: `${borderSize}px solid ${borderColor}`,
        borderRadius,
        color,
        marginBottom: '0.8em',
        padding: unit,
      };
    })(),
    alert__success: (() => {
      const { backgroundColor, borderColor, color } = alert.success;
      return {
        backgroundColor,
        border: `${borderSize}px solid ${borderColor}`,
        color,
      };
    })(),
    alert__warning: (() => {
      const { backgroundColor, borderColor, color } = alert.warning;
      return {
        backgroundColor,
        border: `${borderSize}px solid ${borderColor}`,
        color,
      };
    })(),
    alert__danger: (() => {
      const { backgroundColor, borderColor, color } = alert.danger;
      return {
        backgroundColor,
        border: `${borderSize}px solid ${borderColor}`,
        color,
      };
    })(),
    closeIcons: {},
  };
};

export default withStyles(styles)(Alert);
