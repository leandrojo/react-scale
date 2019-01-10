import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { omit } from 'underscore';
import Masker from 'vanilla-masker';
import { View, theme } from '@react-scale/core';

import { FormContext } from './Form';
import registerField from './registerField';

const { css, withStyles } = theme;

class Input extends Component {
  state = {
    showErrors: false,
  };

  form = {};

  componentWillMount() {
    const { value } = this.props;

    this.setState((state) => {
      switch (typeof value) {
        case 'number':
          return Object.assign(state, { value: value.toFixed(2) });
        case 'string':
        default:
          return Object.assign(state, { value: this.format(value) });
      }
    });
  }

  onBlur = () => {
    this.setState({
      showErrors: true,
    });
  };

  onChange = (ev) => {
    const { name } = this.props;

    const value = this.format(ev.target.value);

    this.props.onChange(value, name);
  };

  format(value: string) {
    const moneyFormatter = {
      precision: 2,
      separator: ',',
      delimiter: '.',
      unit: 'R$',
    };

    if (this.props.isMoney) {
      return Masker.toMoney(Masker.toNumber(value), moneyFormatter);
    }

    if (typeof value === 'string' && this.props.format !== '') {
      return Masker.toPattern(value, this.props.format);
    }

    return value;
  }

  renderError() {
    const { errors, styles } = this.props;
    const showErrors = this.state.showErrors || this.props.showErrors;

    if (this.props.errors.length === 0 || showErrors === false) return null;

    return (
      <div>
        <span {...css(styles.warnText)}>
          {errors[0]}
        </span>
      </div>
    );
  }

  render() {
    const {
      id, isDisable, isReadOnly, label, name, styles, value,
    } = this.props;

    return (
      <FormContext.Consumer>
        {() => (
          <View {...css(styles.content)}>
            <label {...css(styles.label)} htmlFor={id}>
              {label}
            </label>
            <input
              {...css(styles.input)}
              disabled={isDisable}
              name={name}
              onBlur={this.onBlur}
              onChange={this.onChange}
              onFocus={this.props.onInputFocus}
              readOnly={isReadOnly}
              type="text"
              id={id}
              value={value}
              ref={(ref) => {
                this.input = ref;
              }}
              {...omit(
                this.props,
                'inputRef',
                'label',
                'onBlur',
                'onChange',
                'onInputFocus',
                'rules',
                'value',
              )}
            />
            {this.renderError()}
          </View>
        )}
      </FormContext.Consumer>
    );
  }
}

Input.defaultProps = {
  format: '',
  id: '',
  isMoney: false,
  label: '',
  onError: () => {},
  onSuccess: () => {},
  placeholder: '',
  required: false,
  rules: [],
};

Input.propTypes = {
  format: PropTypes.string,
  id: PropTypes.string,
  isMoney: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rules: PropTypes.arrayOf(),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const style = () => ({
  content: {
    flex: 1,
    padding: '20px 0',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: 'calc(100% - 20px)',
  },
  label: {
    color: 'black',
    display: 'block',
    fontSize: 14,
  },
  warn: {},
  warnText: {},
});

export default withStyles(style)(registerField(Input));
