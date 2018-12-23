import React, { Component } from "react";
import { mapObject } from "underscore";
import { Button, Icons, Text, View, theme, version } from "@wide/wide-core";

import "./App.css";

const { withStyles } = theme;

console.log(version);

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

class App extends Component {
  renderButtons() {
    const buttons = [];
    const types = ["primary", "success", "warning", "danger"];

    types.map(type => {
      buttons.push(
        <View style={{ padding: 20, width: "100%" }} key={type}>
          <Button type={type}>{type}</Button>
        </View>
      );
      return false;
    });

    return <View style={{ display: "flex" }}>{buttons}</View>;
  }

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
    return (
      <div className="App">
        <header className="App-header">
          {this.renderButtons()}
          {this.renderIcons()}
        </header>
      </div>
    );
  }
}

const styles = ({ colors }) => {
  return {};
};

export default withStyles(styles)(App);
