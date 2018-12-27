/* @flow */

import React, { Component } from 'react';
import { omit } from 'underscore';

import { css, withStyles } from '~/common/theme';
import View from './View';

export const ButtonGroupContext = React.createContext({
  groupExists: false,
});

type Props = {
  type: 'inline' | 'vertical',
};

class ButtonGroup extends Component<void, Props> {
  state = {};

  render() {
    const { children, spacing, styles } = this.props;

    const propagateProps = omit(this.props, ...['className', 'css', 'spacing', 'styles', 'theme']);

    return (
      <ButtonGroupContext.Provider value={{ spacing }}>
        <View {...css(styles.menu)} {...propagateProps}>
          {children}
        </View>
      </ButtonGroupContext.Provider>
    );
  }
}

ButtonGroup.defaultProps = {
  spacing: 0,
  type: 'inline',
};

const styles = () => ({
  menu: {
    alignItems: 'center',
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
  },
});

export default withStyles(styles)(ButtonGroup);
