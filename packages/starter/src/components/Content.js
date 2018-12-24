import React, { Component } from "react";
import { View, theme } from "@wide/wide-core";

const { css, withStyles } = theme;

class Content extends Component {
  render() {
    const { styles } = this.props;

    return <View {...css(styles.content)}>{this.props.children}</View>;
  }
}

const styles = ({ colors }) => {
  return {
    content: {
      width: 720
    }
  };
};

export default withStyles(styles)(Content);
