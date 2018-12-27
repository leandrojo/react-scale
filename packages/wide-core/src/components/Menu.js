import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { omit } from 'underscore';

import { css, withStyles } from '~/common/theme';
import View from './View';

export const MenuContext = React.createContext({
  buttonType: 'link',
  spacing: 0,
});

class Menu extends Component {
  state = {};

  render() {
    const {
      buttonType, children, spacing, styles, type,
    } = this.props;

    const propagateProps = omit(
      this.props,
      ...['className', 'css', 'spacing', 'styles', 'theme', 'type'],
    );

    return (
      <MenuContext.Provider value={{ spacing, type, buttonType }}>
        <View {...css(styles.menu)} {...propagateProps}>
          {children}
        </View>
      </MenuContext.Provider>
    );
  }
}

Menu.defaultProps = {
  buttonType: 'link',
  spacing: true,
  type: 'inline',
};

Menu.propTypes = {
  buttonType: PropTypes.string,
  spacing: PropTypes.bool,
  type: PropTypes.oneOfType([
    'inline',
    'vertical',
  ]),
};

const styles = () => ({
  menu: {
    alignItems: 'center',
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
  },
});

export default withStyles(styles)(Menu);
