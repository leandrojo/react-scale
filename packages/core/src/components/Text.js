import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { omit } from 'underscore';

import { css, withStyles } from '~/common/theme';

function b(text, props = {}) {
  const { styles } = props;
  const propagateProps = omit(props, 'styles');
  return (
    <b {...css(styles.bold)} {...propagateProps}>
      {text}
    </b>
  );
}

// SEO tips say: don't repeat h1, reserve h2, then ... h3 for default.
function heading(text, type = 'h3', props) {
  const { styles } = props;

  const propagateProps = omit(props, 'styles');

  switch (type) {
    case 'h1':
      return (
        <h1 {...css(styles.heading, styles.heading__1)} {...propagateProps}>
          {text}
        </h1>
      );
    case 'h2':
      return (
        <h2 {...css(styles.heading, styles.heading__2)} {...propagateProps}>
          {text}
        </h2>
      );
    case 'h3':
      return (
        <h3 {...css(styles.heading, styles.heading__3)} {...propagateProps}>
          {text}
        </h3>
      );
    case 'h4':
      return (
        <h4 {...css(styles.heading, styles.heading__4)} {...propagateProps}>
          {text}
        </h4>
      );
    case 'h5':
      return (
        <h5 {...css(styles.heading, styles.heading__5)} {...propagateProps}>
          {text}
        </h5>
      );
    case 'h6':
      return (
        <h6 {...css(styles.heading, styles.heading__6)} {...propagateProps}>
          {text}
        </h6>
      );
    default:
      return null;
  }
}

function i(text, props = {}) {
  const { styles } = props;
  const propagateProps = omit(props, 'styles');
  return (
    <i {...css(styles.italic)} {...propagateProps}>
      {text}
    </i>
  );
}

// TODO: Implement template for easy paragraph.
function p(text, props = {}) {
  const { styles } = props;
  const propagateProps = omit(props, 'styles');
  return (
    <p {...css(styles.paragraph)} {...propagateProps}>
      {text}
    </p>
  );
}

function span(text, props = {}) {
  const { styles } = props;
  const propagateProps = omit(props, 'styles');
  return (
    <span {...css(styles.span)} {...propagateProps}>
      {text}
    </span>
  );
}

export const TextContext = React.createContext();

class Text extends Component {
  state = {};

  render() {
    const { children, type } = this.props;

    const propagateProps = omit(this.props, ...['children', 'css', 'theme', 'type']);

    switch (type) {
      case 'b':
        return b(children, propagateProps);
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return (
          <TextContext.Provider value={{ type }}>
            {heading(children, type, propagateProps)}
          </TextContext.Provider>
        );
      case 'i':
        return i(children, propagateProps);
      case 'p':
      case 'paragraph':
        return p(children, propagateProps);
      case 'span':
      default:
        return span(children, propagateProps);
    }
  }
}

Text.b = b;
Text.i = i;
Text.p = p;
Text.span = span;

Text.defaultProps = {
  children: '',
  type: 'span',
};

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),

  /**
   * The reason for alert and your styled.
   *
   * @type {'b' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'i' | 'span' | 'p' | 'paragraph'}
   */
  type: PropTypes.string,
};

const styles = ({ fontFamily, typography }) => ({
  text: (() => {
    const { color, fontSize } = typography;
    return {
      color,
      fontSize,
      fontFamily,
    };
  })(),
  paragraph: (() => {
    const { color, fontSize } = typography;
    return {
      color,
      fontSize,
      fontFamily,
    };
  })(),
  heading: (() => {
    const { color, injectStyle } = typography.heading;
    return {
      color,
      fontFamily,
      margin: 0,

      ...injectStyle,
    };
  })(),
  heading__1: (() => {
    const { fontSize } = typography.h1;
    return {
      fontSize,
      fontFamily,
    };
  })(),
  heading__2: (() => {
    const { fontSize } = typography.h2;
    return {
      fontSize,
      fontFamily,
    };
  })(),
  heading__3: (() => {
    const { fontSize } = typography.h3;
    return {
      fontSize,
      fontFamily,
    };
  })(),
  heading__4: (() => {
    const { fontSize } = typography.h4;
    return {
      fontSize,
      fontFamily,
    };
  })(),
  heading__5: (() => {
    const { fontSize } = typography.h5;
    return {
      fontSize,
      fontFamily,
    };
  })(),
  heading__6: (() => {
    const { fontSize } = typography.h6;
    return {
      fontSize,
      fontFamily,
    };
  })(),
  italic: (() => {
    const { color } = typography.italic;
    return {
      color,
    };
  })(),
});

export default withStyles(styles)(Text);
