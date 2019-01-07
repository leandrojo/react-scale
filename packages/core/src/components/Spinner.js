import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  isNull, omit, propertyOf, range,
} from 'underscore';

import { css, withStyles } from '~/common/theme';

import { threeBounce } from './SpinnerTypes';
import Text from './Text';
import View from './View';

class Spinner extends Component {
  renderChild(key) {
    const { size, styles, type } = this.props;

    const style = [];

    style.push(propertyOf(styles)(`${type}Child`));
    style.push(propertyOf(styles)(`${type}Child__${size}`));
    style.push(propertyOf(styles)(`${type}Child__${key}`));

    return <View {...css(style)} />;
  }

  renderSpin() {
    const {
      children, styles, tip, type,
    } = this.props;

    const style = [];
    const propagateProps = omit(
      this.props,
      ...['children', 'className', 'css', 'spinning', 'styles', 'theme', 'type'],
    );

    let childCount = 0;

    style.push(styles.spinner);

    if (isNull(children) === false) style.push(styles.spinner_wrapper);

    switch (type) {
      case 'threeBounce':
      default:
        childCount = 3;
    }

    return (
      <View {...css(style)}>
        <View {...propagateProps} {...css(propertyOf(styles)(type))}>
          {range(childCount).map(key => this.renderChild(key))}
        </View>
        <Text {...css(styles.spinnerTip)}>{tip}</Text>
      </View>
    );
  }

  render() {
    const { children, styles, spinning } = this.props;

    if (spinning === false) return null;

    return (
      <View {...css(styles.parent)}>
        {this.renderSpin()}
        {children}
      </View>
    );
  }
}

Spinner.defaultProps = {
  children: null,
  size: 'lg',
  spinning: true,
  tip: '',
  type: 'threeBounce',
};

Spinner.propTypes = {
  children: PropTypes.oneOfType([null, PropTypes.element]),
  size: PropTypes.oneOfType(['sm', 'md', 'lg', 'xl']),
  spinning: PropTypes.bool,
  tip: PropTypes.string,
  type: PropTypes.oneOfType([
    'rotatingPlane',
    'fadingCircle',
    'foldingCube',
    'doubleBounce',
    'wave',
    'wanderingCubes',
    'pulse',
    'chasingDots',
    'threeBounce',
    'circle',
    'cubeGrid',
  ]),
};

const styles = theme => {
  const { absolute, components } = theme;
  const { backgroundColor, tip } = components.spinner;

  return {
    ...threeBounce(theme),
    parent: {
      position: 'relative',
    },
    spinner: {
      alignItems: 'center',
      backgroundColor,
      boxSizing: 'content-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      zIndex: 30,
    },
    spinner_wrapper: {
      ...absolute,
    },
    spinnerTip: (() => {
      const {
        color, fontFamily, fontSize, fontWeight,
      } = tip;

      return {
        color,
        fontFamily,
        fontSize,
        fontWeight,
      };
    })(),
  };
};

export default withStyles(styles)(Spinner);
