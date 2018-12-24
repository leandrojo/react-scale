import React, { Component } from "react";
import { Button, Text, View, theme } from "@wide/wide-core";

import { Board, Content } from "../components";

const { css, withStyles } = theme;

class Preset extends Component {
  renderTypes() {
    return (
      <Board>
        <Board.Content>
          <View style={{ padding: 20, width: "100%" }}>
            <Button type="primary">Primary Button</Button>
          </View>
          <View style={{ padding: 20, width: "100%" }}>
            <Button type="success">Success Button</Button>
          </View>
          <View style={{ padding: 20, width: "100%" }}>
            <Button type="warning">Warning Button</Button>
          </View>
          <View style={{ padding: 20, width: "100%" }}>
            <Button type="danger">Danger Button</Button>
          </View>
        </Board.Content>
        <Board.Code>
          {[
            `<Button type="primary">Primary Button</Button>`,
            `<Button type="success">Success Button</Button>`,
            `<Button type="warning">Warning Button</Button>`,
            `<Button type="danger">Danger Button</Button>`
          ].join(`\n`)}
        </Board.Code>
      </Board>
    );
  }

  renderSizes() {
    const buttons = [];
    const sizes = ["xl", "lg", "sm", "xs"];

    sizes.map(size => {
      buttons.push(
        <View style={{ padding: 20, width: "100%" }} key={size}>
          <Button size={size}>{size}</Button>
        </View>
      );
      return false;
    });

    return <View style={{ display: "flex" }}>{buttons}</View>;
  }

  render() {
    return (
      <Content>
        <Text>Types</Text>
        {this.renderTypes()}
        <Text>Sizes</Text>
        {this.renderSizes()}
      </Content>
    );
  }
}

const styles = () => {
  return {};
};

export default withStyles(styles)(Preset);
