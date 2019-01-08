import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { omit } from 'underscore';

import { css, withStyles } from '~/common/theme';
import View from './View';

export const ButtonToolbarContext = React.createContext({
  toolbarExists: false,
  spacing: false,
});

class ButtonToolbar extends Component {
  state = {};

  render() {
    const { children, spacing, styles } = this.props;

    const propagateProps = omit(this.props, ...['className', 'css', 'spacing', 'styles', 'theme']);

    return (
      <ButtonToolbarContext.Provider value={{ toolbarExists: true, spacing }}>
        <View {...css(styles.buttonToolbar)} {...propagateProps}>
          {children}
        </View>
      </ButtonToolbarContext.Provider>
    );
  }
}

ButtonToolbar.defaultProps = {
  spacing: true,
};

ButtonToolbar.propTypes = {
  spacing: PropTypes.bool,
};

const styles = () => ({
  buttonToolbar: {
    alignItems: 'center',
    display: 'flex',
  },
});

export default withStyles(styles)(ButtonToolbar);
