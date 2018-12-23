/* @flow */

import React, { Component } from "react";
import { omit } from "underscore";

import { css, withStyles } from "~/common/theme";

const Text = ({ children, className, style, styles }) => (
  <span style={style} className={(css(styles.content).className, className)}>
    {children}
  </span>
);

Text.defaultProps = {
  className: ""
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
