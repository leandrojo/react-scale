import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, theme } from '@react-scale/core';

const { css, withStyles } = theme;

export const FormContext = React.createContext({
  formExist: false,
  isCompleted: true,
  registerField: () => {},
});

class Form extends Component {
  state = {
    isCompleted: true,
  };

  registerField = () => {};

  render() {
    const { children, styles } = this.props;
    const { isCompleted } = this.state;

    return (
      <View {...css(styles.content)}>
        <FormContext.Provider
          value={{
            formExist: true,
            isCompleted,
            registerField: this.registerField,
          }}
        >
          {children}
        </FormContext.Provider>
      </View>
    );
  }
}

Form.propTypes = {
  children: PropTypes.element.isRequired,
};

const style = () => ({
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '20px 0',
  },
});

export default withStyles(style)(Form);
