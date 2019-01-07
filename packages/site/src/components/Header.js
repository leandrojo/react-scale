import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import { compose } from "recompose";
import { Button, View, theme } from "@react-scale/core";

const { css, registerTheme, withStyles } = theme;

class Header extends Component {
  state = {};

  render() {
    const { styles, theme } = this.props;
    return (
      <View {...css(styles.content)}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/theming">Theming</Link>
            </li>
          </ul>
        </nav>
      </View>
    );
  }
}

const style = ({ colors }) => {
  return {
    content: {
      backgroundColor: colors.grayExtraLight,
      padding: 20
    }
  };
};

export default compose(withStyles(style))(Header);
