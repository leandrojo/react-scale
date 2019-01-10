import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Schema from 'async-validator';
import { object } from 'underscore';
import { View, theme } from '@react-scale/core';

const { css, withStyles } = theme;

export const FormContext = React.createContext({
  formExist: false,
  isCompleted: true,
  registerField: () => {},
  showErrors: false,
});

class Form extends Component {
  state = {
    isCompleted: true,
    errors: {},
    rules: {},
    showErrors: false,
    values: {},
  };

  schema = new Schema({});

  onChange = (value, name) => {
    this.setState(state => ({
      values: Object.assign(state.values, object([name], [value])),
    }));
    this.validate(name, value);
  };

  onSubmit = () => {
    console.log(this.state);
    this.setState({
      showErrors: true,
    });
  };

  registerField = (name, rules = []) => {
    this.setState(state => ({
      rules: Object.assign(state.rules, object([name], [rules])),
    }));
    this.schema = new Schema(Object.assign(this.state.rules, object([name], [rules])));
    this.validate(name, '');
  };

  validate(name, value = '') {
    const { values } = this.state;
    this.schema.validate(Object.assign(values, object([name], [value])), (errors) => {
      this.setState({
        errors,
      });
    });
  }

  render() {
    const { children, styles } = this.props;
    const {
      errors, isCompleted, rules, showErrors, values,
    } = this.state;

    return (
      <View {...css(styles.content)}>
        <FormContext.Provider
          value={{
            errors,
            formExist: true,
            isCompleted,
            registerField: this.registerField,
            onChange: this.onChange,
            onSubmit: this.onSubmit,
            rules,
            showErrors,
            values,
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
  onSubmit: PropTypes.func.isRequired,
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
