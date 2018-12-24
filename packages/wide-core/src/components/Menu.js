/* @flow */

import React, { Component } from "react";
import { omit } from "underscore";

import { css, withStyles } from "~/common/theme";
import View from "./View";

export const MenuContext = React.createContext({
  spacing: 0,
  type: "link"
});

type Props = {
  type: "inline" | "vertical"
};

class Menu extends Component<void, Props> {
  state = {};

  render() {
    const { children, spacing, styles, type } = this.props;

    const propagateProps = omit(
      this.props,
      ...["className", "css", "spacing", "styles", "theme", "type"]
    );

    return (
      <MenuContext.Provider value={{ spacing, type: "link" }}>
        <View {...css(styles.menu)} {...propagateProps}>
          {children}
        </View>
      </MenuContext.Provider>
    );
  }
}

Menu.defaultProps = {
  spacing: 0,
  type: "inline"
};

const styles = () => {
  return {
    menu: {
      alignItems: "center",
      backgroundColor: "red",
      display: "flex",
      justifyContent: "center"
    }
  };
};

export default withStyles(styles)(Menu);
