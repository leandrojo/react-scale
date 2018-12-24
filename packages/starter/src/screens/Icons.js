import React, { Component } from "react";
import { mapObject } from "underscore";
import { Icons, Text, View, theme } from "@wide/wide-core";

const { css, withStyles } = theme;

const Wrapper = ({ children }) => (
  <View
    style={{
      backgroundColor: "rgba(0, 0, 0, .1)",
      display: "flex",
      margin: 10,
      width: 200
    }}
  >
    {children}
  </View>
);

class Preset extends Component {
  renderIcons() {
    const { colors } = this.props.theme;
    const icons = [];

    mapObject(Icons, (Icon, key) => {
      icons.push(
        <Wrapper key={key}>
          <Icon color={colors.primary} size={24} alt={key} />
          <Text>{key}</Text>
        </Wrapper>
      );
      return;
    });

    return <View style={{ padding: 20, width: "100%" }}>{icons}</View>;
  }

  render() {
    return <View {...css(styles.content)}>{this.renderIcons()}</View>;
  }
}

const styles = () => {
  return {
    content: {
      display: "flex",
      height: 90
    }
  };
};

export default withStyles(styles)(Preset);
