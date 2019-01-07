import React, { Component } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { Badge, Button, Spinner, View, theme } from "@react-scale/core";

const { css, withStyles } = theme;

class Home extends Component {
  state = {};

  render() {
    const { styles, theme } = this.props;
    return <View {...css(styles.content)}>Home Red</View>;
  }
}

const style = ({ colors }) => {
  return {
    content: {
      backgroundColor: "red",
      padding: 20
    }
  };
};

export default compose(
  withRouter,
  withStyles(style)
)(Home);
