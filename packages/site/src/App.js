import React, { Component } from "react";
import { Route } from "react-router";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import { Button, View, theme } from "@react-scale/core";

import { Footer, Header } from "./components";

import Home from "./screens/Home";
import Theming from "./screens/Theming";

console.log(theme);

const { css, withStyles } = theme;

class App extends Component {
  componentDidMount() {}
  render() {
    const { styles } = this.props;
    return (
      <BrowserRouter>
        <View {...css(styles.content)}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/theming" component={Theming} />
          </Switch>
          <Footer />
        </View>
      </BrowserRouter>
    );
  }
}

export default withStyles(({ colors }) => {
  return {
    content: {
      backgroundColor: colors.grayLight,
      margin: 0,
      padding: 20
    }
  };
})(App);
