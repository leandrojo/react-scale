import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { omit } from 'underscore';

import { css, withStyles } from '~/common/theme';
import View from './View';

class Menu extends Component {
  state = {};

  render() {
    const { children, styles } = this.props;

    const propagateProps = omit(this.props, ...['className', 'css', 'styles', 'theme']);

    return (
      <View {...css(styles.menu)} {...propagateProps}>
        {children}
      </View>
    );
  }
}

Menu.defaultProps = {
  children: null,
};

Menu.propTypes = {
  children: PropTypes.element,
};

const styles = () => ({
  menuItem: {},
});

export default withStyles(styles)(Menu);
