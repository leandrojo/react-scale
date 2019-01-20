/* eslint-disable no-console */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Schema from 'async-validator';
import { object, pluck, reduce } from 'underscore';
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
    console.log('Errors length:', this.getCount());

    this.setState({
      showErrors: true,
    });

    if (this.getCount() === 0) this.props.onSubmit(this.state.values);
  };

  getCount = () => reduce(pluck(this.state.errors, 'length'), (len, before) => len + before, 0) || 0;

  registerField = (name, rules = []) => {
    this.setState(state => {
      const newRules = Object.assign(state.rules, object([name], [rules]));

      this.schema = new Schema(newRules);

      return {
        rules: newRules,
      };
    });

    this.validate(name, '');
  };

  validate(name, value = '') {
    const { values } = this.state;
    this.schema.validate(Object.assign(values, object([name], [value])), errors => {
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
