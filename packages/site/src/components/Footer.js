import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import { compose } from "recompose";
import { Button, View, theme } from "@react-scale/core";

const { css, registerTheme, withStyles } = theme;

class Footer extends Component {
  state = {};

  render() {
    const { styles, theme } = this.props;
    return <View {...css(styles.content)}>Footer</View>;
  }
}

const style = ({ colors }) => {
  return {
    content: {
      backgroundColor: "black",
      color: "white",
      padding: 20,
      textAlign: "center"
    }
  };
};

export default compose(withStyles(style))(Footer);
