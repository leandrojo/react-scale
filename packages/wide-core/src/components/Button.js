/* @flow */

import React, { Component } from "react";
import { omit } from "underscore";

import { css, withStyles } from "~/common/theme";

class Button extends Component<void, Props> {
  state = {};

  onPress = ev => {
    ev.preventDefault();

    if (typeof this.props.onClick === "function") {
      this.props.onClick();
      return;
    }

    this.props.onPress();
  };

  render() {
    const { children, classname, size, styles, type } = this.props;

    const style = [styles.button];
    const propagateProps = omit(
      this.props,
      ...["className", "css", "onPress", "onClick", "styles", "theme", "type"]
    );

    switch (size) {
      case "xl":
        style.push(styles.button__xl);
        break;
      case "lg":
        style.push(styles.button__lg);
        break;
      case "sm":
        style.push(styles.button__sm);
        break;
      case "xs":
        style.push(styles.button__xs);
        break;
      default:
    }

    switch (type) {
      case "primary":
        style.push(styles.button__primary);
        break;
      case "success":
        style.push(styles.button__success);
        break;
      case "warning":
        style.push(styles.button__warning);
        break;
      case "danger":
        style.push(styles.button__danger);
        break;
    }

    return (
      <button
        onClick={this.onPress}
        type="button"
        {...css(style)}
        {...propagateProps}
      >
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  onPress: () => {},
  size: "",
  type: ""
};

const styles = ({ colors, fontFamily, text }) => {
  return {
    button: {
      alignItems: "center",
      userSelect: "none",
      backgroundColor: colors.gray,
      border: "1px solid transparent",
      borderRadius: "0.3em",
      cursor: "pointer",
      display: "flex",
      fontFamily,
      fontSize: text.size,
      fontWeight: "500",
      lineHeight: "2.3em",
      height: "2.4em",
      marginBottom: "0",
      overflow: "hidden",
      padding: "0 1em",
      textAlign: "center",
      touchAction: "manipulation",
      verticalAlign: "middle",
      whiteSpace: "nowrap"
    },
    button__xs: {
      fontSize: "70%"
    },
    button__sm: {
      fontSize: "85%"
    },
    button__lg: {
      fontSize: "110%"
    },
    button__xl: {
      fontSize: "125%"
    },
    button__primary: {
      backgroundColor: colors.primary
    },
    button__success: {
      backgroundColor: colors.success
    },
    button__warning: {
      backgroundColor: colors.warning
    },
    button__danger: {
      backgroundColor: colors.danger
    }
  };
};

export default withStyles(styles)(Button);
