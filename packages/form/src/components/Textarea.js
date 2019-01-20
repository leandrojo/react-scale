import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { omit } from 'underscore';
import Masker from 'vanilla-masker';
import { View, theme } from '@react-scale/core';

import { FormContext } from './Form';
import registerField from './registerField';

const { css, withStyles } = theme;

class Textarea extends Component {
  state = {
    showErrors: false,
    isDisable: false,
    isInputFocus: false,
    isReadOnly: false,
    value: '',
  };

  form = {};

  componentWillMount() {
    const { disabled, children, readOnly } = this.props;

    this.setIsDisable(disabled);
    this.setIsReadOnly(readOnly);

    this.setState(state => {
      switch (typeof value) {
        case 'number':
          return Object.assign(state, {
            value: children.toFixed(2),
          });
        case 'string':
        default:
          return Object.assign(state, {
            value: this.format(children),
          });
      }
    });
  }

  setIsDisable(isDisable = false) {
    this.setState({ isDisable });
  }

  setIsReadOnly(isReadOnly = false) {
    this.setState({ isReadOnly });
  }

  onBlur = () => {
    this.setState({
      isInputFocus: true,
      showErrors: true,
    });
  };

  onChange = ev => {
    const { name } = this.props;

    const value = this.format(ev.target.value);

    this.props.onChange(value, name);
  };

  onFocus = () => {
    this.setState({
      isInputFocus: true,
    });
  };

  format(value: string) {
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
        <span {...css(styles.warnText)}>{errors[0]}</span>
      </div>
    );
  }

  renderLabel() {
    const { id, label, styles } = this.props;
    const { isInputFocus } = this.state;

    const style = [styles.label];

    if (isInputFocus) style.push(styles.label__focus);

    return (
      <label {...css(style)} htmlFor={id}>
        {label}
      </label>
    );
  }

  render() {
    const {
      id, name, styles,
    } = this.props;
    const {
      isDisable, isReadOnly, value,
    } = this.state;

    const style = [];

    style.push(styles.textarea);

    return (
      <FormContext.Consumer>
        {() => (
          <View {...css(styles.content)}>
            {this.renderLabel()}
            <textarea
              {...css(style)}
              cols="30"
              disabled={isDisable}
              name={name}
              onBlur={this.onBlur}
              onChange={this.onChange}
              onFocus={this.onFocus}
              readOnly={isReadOnly}
              rows="10"
              id={id}
              ref={ref => {
                this.input = ref;
              }}
              {...omit(
                this.props,
                'inputRef',
                'label',
                'onBlur',
                'onChange',
                'onFocus',
                'onInputFocus',
                'placeholder',
                'readOnly',
                'rules',
                'value',
              )}
            >
              {value}
            </textarea>
            {this.renderError()}
          </View>
        )}
      </FormContext.Consumer>
    );
  }
}

Textarea.defaultProps = {
  errors: [],
  format: '',
  id: '',
  isMoney: false,
  label: '',
  onError: () => {},
  onSuccess: () => {},
  placeholder: '',
  readOnly: false,
  required: false,
  rules: [],
};

Textarea.propTypes = {
  errors: PropTypes.arrayOf(),
  format: PropTypes.string,
  id: PropTypes.string,
  isMoney: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  rules: PropTypes.arrayOf(),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const style = ({ colors, components }) => ({
  content: {
    flex: 1,
    padding: '20px 0 10px',
    position: 'relative',
  },
  textarea: (() => {
    const {
      borderColor, borderRadius, borderSize, padding, width,
    } = components.input;

    return {
      appearance: 'none',
      border: `${borderSize}px solid ${borderColor}`,
      borderRadius,
      boxShadow: 'none',
      padding,
      resize: 'none',
      width,

      ':focus': {
        outline: 'none',
        borderColor: colors.secondary,
      },
    };
  })(),
  label: (() => {
    const {
      color, fontFamily, fontSize, paddingVertical,
    } = components.label;

    return {
      color,
      display: 'block',
      fontFamily,
      fontSize,
      padding: `${paddingVertical}px 0px`,
      pointerEvents: 'none',
      position: 'absolute',
      top: 'calc(50% + 3px)',
      left: 10,
      transform: 'translateY(-50%)',
      transition: 'font-size 100ms, top 100ms, color 100ms',
    };
  })(),
  label__focus: {
    fontSize: '70%',
    left: 0,
    top: 8,
    transition: 'font-size 250ms, top 250ms, color 250ms',
  },
  warn: {},
  warnText: {},
});

export default withStyles(style)(registerField(Textarea));
