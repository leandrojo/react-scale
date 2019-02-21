/* eslint-disable no-console */

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
    errors: [],
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
    this.setState({
      showErrors: true,
    });

    if (this.getCount() === 0) this.props.onSubmit(this.state.values);
  };

  getCount = () => this.state.errors.length || 0;

  registerField = async (name, rules = []) => {
    await this.setState(async state => {
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
        errors: errors || [],
      });
    });
  }

  render() {
    const { children, className, styles } = this.props;
    const {
      errors, isCompleted, rules, showErrors, values,
    } = this.state;

    return (
      <View className={(css(styles.content).className, className)}>
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

Form.defaultProps = {
  className: '',
};

Form.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  styles: PropTypes.objectOf().isRequired,
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
