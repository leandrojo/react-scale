import React, { Component } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { Badge, Button, Spinner, View, theme } from "@react-scale/core";

const { css, registerTheme, withStyles } = theme;

class Theming extends Component {
  state = {
    count: 0
  };

  onChangeTheme = ev => {
    registerTheme({
      colors: {
        primary: ev.target.value
      }
    });

    this.setState(({ count }) => {
      return {
        count: count++
      };
    });
  };

  render() {
    const { styles, theme } = this.props;
    return (
      <View {...css(styles.content)}>
        <View {...css(styles.options)}>
          <input
            type="color"
            onChange={this.onChangeTheme}
            value={theme.colors.primary}
          />
        </View>

        <View {...css(styles.playground)}>
          <View {...css(styles.item)}>
            <Button type="primary">Primary Button</Button>
          </View>
          <View {...css(styles.item)}>
            <Badge type="primary">Primary Badge</Badge>
          </View>
          <View {...css(styles.item)}>
            <Spinner size="sm" />
          </View>
        </View>
      </View>
    );
  }
}

const style = ({ colors }) => {
  return {
    content: {
      backgroundColor: colors.grayExtraLight,
      padding: 20
    },
    options: {
      margin: 5,
      marginBottom: 20
    },
    playground: {
      display: "flex"
    },
    item: {
      flex: 1
    }
  };
};

export default compose(
  withRouter,
  withStyles(style)
)(Theming);
