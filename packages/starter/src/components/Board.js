import React, { Component } from "react";
import { View, theme } from "@wide/wide-core";

const { css, withStyles } = theme;

class Board extends Component {
  render() {
    const { styles } = this.props;

    return <View {...css(styles.board)}>{this.props.children}</View>;
  }
}

const styles = ({ colors }) => {
  return {
    board: {
      backgroundColor: "#fafafa",
      border: "1px solid #dedede",
      borderRadius: 3,
      margin: "10px 0",
      padding: 10
    },
    boardContent: {
      backgroundColor: "white",
      borderRadius: 3,
      display: "flex",
      padding: 10
    },
    boardCode: {
      backgroundColor: "white",
      borderRadius: 3,
      lineHeight: 1.4,
      padding: 10
    }
  };
};

const Content = withStyles(styles)(({ children, styles }) => (
  <View {...css(styles.boardContent)}>{children}</View>
));

const Code = withStyles(styles)(({ children, styles }) => (
  <pre {...css(styles.boardCode)}>{children}</pre>
));

Board.Code = Code;
Board.Content = Content;

export default withStyles(styles)(Board);
