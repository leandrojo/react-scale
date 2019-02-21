import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { omit } from 'underscore';
import { View, theme } from '@react-scale/core';

import { FormContext } from './Form';
import registerField from './registerField';

const { css, withStyles } = theme;

class Checkbox extends Component {
  state = {
    isChecked: false,
    showErrors: false,
    value: '',
  };

  form = {};

  async componentWillMount() {
    const { checked, name, value } = this.props;

    await this.setState({
      isChecked: checked,
      value: value === '' ? name : value, // checkbox need a own value.
    });

    this.onChange(this.state.isChecked, name);
  }

  onBlur = () => {
    this.setState({
      showErrors: true,
    });
  };

  onChange = async () => {
    const { name } = this.props;

    await this.setState(state => ({
      isChecked: state.isChecked === false,
    }));

    this.props.onChange(this.state.isChecked, name);
  };

  renderError() {
    const { errors, styles } = this.props;
    const showErrors = this.state.showErrors || this.props.showErrors;

    if (errors.length === 0 || showErrors === false) return null;

    return (
      <div {...css(styles.warn)}>
        <span {...css(styles.warnText)}>{errors[0]}</span>
      </div>
    );
  }

  renderLabel() {
    const {
      id, label, styles, value,
    } = this.props;

    const style = [styles.label];

    return (
      <View onClick={() => this.onChange(value)} role="presentation" {...css(styles.labelContent)}>
        <label {...css(style)} htmlFor={id}>
          {label}
        </label>
        {this.renderError()}
      </View>
    );
  }

  renderBox() {
    const {
      styles, value,
    } = this.props;
    const { isChecked } = this.state;

    const style = [styles.select];

    if (isChecked) style.push(styles.select__active);

    return (
      <View onClick={() => this.onChange(value)} role="presentation" {...css(styles.box)}>
        <View {...css(style)} />
      </View>
    );
  }

  render() {
    const {
      errors, id, isDisable, isReadOnly, name, styles,
    } = this.props;
    const { isChecked, value } = this.state;

    const showErrors = this.state.showErrors || this.props.showErrors;
    const style = [styles.input];

    if (errors.length !== 0 && showErrors !== false) style.push(styles.input__danger);

    return (
      <FormContext.Consumer>
        {() => (
          <View {...css(styles.content)}>
            <View {...css(styles.inner)}>
              {this.renderBox()}
              {this.renderLabel()}
              <input
                {...css(style)}
                disabled={isDisable}
                name={name}
                onChange={this.onChange}
                readOnly={isReadOnly}
                type="checkbox"
                id={id}
                value={value}
                checked={isChecked}
                ref={ref => {
                  this.input = ref;
                }}
                {...omit(
                  this.props,
                  'inputRef',
                  'isChecked',
                  'label',
                  'onBlur',
                  'onChange',
                  'onFocus',
                  'onInputFocus',
                  'placeholder',
                  'rules',
                  'value',
                )}
              />
            </View>
          </View>
        )}
      </FormContext.Consumer>
    );
  }
}

Checkbox.defaultProps = {
  checked: false,
  format: '',
  id: '',
  isMoney: false,
  label: '',
  onError: () => {},
  onSuccess: () => {},
  placeholder: '',
  required: false,
  rules: [],
  value: '',
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const style = ({ colors, components, ...common }) => ({
  content: {
    marginBottom: 10,
  },
  inner: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: '5px 0 0',
    position: 'relative',
  },
  input: {
    appearance: 'none',
    boxShadow: 'none',

    ':focus': {
      outline: 'none',
      borderColor: colors.secondary,
    },
  },
  box: (() => {
    const {
      borderColor, borderRadius, borderSize,
    } = components.checkbox;
    return {
      alignItems: 'center',
      border: `${borderSize}px solid ${borderColor}`,
      borderRadius,
      cursor: 'pointer',
      display: 'flex',
      height: 16,
      justifyContent: 'center',
      marginRight: 10,
      width: 16,
    };
  })(),
  select: (() => {
    const {
      borderRadius,
    } = components.checkbox;

    return {
      borderRadius: borderRadius - 1,
      height: 14,
      width: 14,
    };
  })(),
  select__active: {
    backgroundColor: colors.acent,
  },
  label: (() => {
    const {
      color, fontFamily, fontSize,
    } = components.label;

    return {
      color,
      display: 'block',
      fontFamily,
      fontSize,
      pointerEvents: 'none',
      transition: 'font-size 100ms, top 100ms, color 100ms',
    };
  })(),
  labelContent: {
  },
  warn: {},
  warnText: {
    color: colors.danger,
    fontSize: common.typography.fontSize * 0.8,
    fontFamily: common.fontFamily,
  },
});

export default withStyles(style)(registerField(Checkbox));
