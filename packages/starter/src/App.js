import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { View, theme } from "@wide/wide-core";

import Header from "./components/Header";

import Buttons from "./screens/Buttons";
import Icons from "./screens/Icons";

const { css, withStyles } = theme;

class App extends Component {
  render() {
    const { styles } = this.props;
    return (
      <Router>
        <View {...css(styles.app)}>
          <Header />
          <Switch>
            <Route exact path="/icons" component={Icons} />
            <Route exact path="/buttons" component={Buttons} />
          </Switch>
        </View>
      </Router>
    );
  }
}

const styles = ({ colors }) => {
  return {
    app: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column"
    }
  };
};

export default withStyles(styles)(App);
