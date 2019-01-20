import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, theme } from '@react-scale/core';

import { FormContext } from './Form';

const { withStyles } = theme;

class Submit extends Component {
  static contextType = FormContext;

  onPress = () => {
    this.context.onSubmit();
  };

  render() {
    const { children } = this.props;

    return (
      <Button {...this.props} onPress={this.onPress}>
        {children}
      </Button>
    );
  }
}

Submit.propTypes = {
  children: PropTypes.element.isRequired,
};

const style = () => ({});

export default withStyles(style)(Submit);
