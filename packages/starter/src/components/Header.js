import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Menu, View, theme } from "@wide/wide-core";

const { css, withStyles } = theme;

class Header extends Component {
  onPress(path) {
    this.props.history.push(path);
  }

  render() {
    const { styles } = this.props;

    return (
      <View {...css(styles.header)}>
        <Menu spacing={10}>
          <Button onPress={() => this.onPress("/buttons")}>Buttons</Button>
          <Button onPress={() => this.onPress("/icons")}>Icons</Button>
        </Menu>
      </View>
    );
  }
}

const styles = ({ colors }) => {
  return {
    header: {
      backgroundColor: colors.primary,
      display: "flex",
      height: 64,
      width: "100vw"
    }
  };
};

export default withRouter(withStyles(styles)(Header));
