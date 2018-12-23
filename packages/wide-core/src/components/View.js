/* @flow */

import React, { Component } from "react";
import { omit } from "underscore";

import { css, withStyles } from "~/common/theme";

const View = ({ children, className, style, styles }) => (
  <div style={style} className={(css(styles.content).className, className)}>
    {children}
  </div>
);

View.defaultProps = {
  className: ""
};

const styles = () => {
  return {
    content: {
      boxSizing: "content-box"
    }
  };
};

export default withStyles(styles)(View);
