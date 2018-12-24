/* @flow */

import React, { Component } from "react";
import { omit } from "underscore";

import { css, withStyles } from "~/common/theme";

const Code = ({ children, className, style, styles }) => (
  <code style={style} className={(css(styles.content).className, className)}>
    {children}
  </code>
);

const Span = ({ children, className, style, styles }) => (
  <span style={style} className={(css(styles.content).className, className)}>
    {children}
  </span>
);

class Text extends React.Component {
  render() {
    switch (this.props.type) {
      case "code":
        return <Code {...this.props} />;
      case "span":
      default:
        return <Span {...this.props} />;
    }
  }
}

Text.defaultProps = {
  className: "",
  type: "span"
};

const styles = ({ fontFamily, text }) => {
  const { color, size } = text;
  return {
    text: {
      color,
      fontSize: size,
      fontFamily
    }
  };
};

export default withStyles(styles)(Text);
