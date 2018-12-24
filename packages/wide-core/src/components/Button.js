/* @flow */

import React, { Component } from "react";
import { omit } from "underscore";

import { css, withStyles } from "~/common/theme";

import { ButtonGroupContext } from "./ButtonGroup";

class Button extends Component<void, Props> {
  state = {};

  handlePress = ev => {
    ev.preventDefault();

    if (typeof this.props.onClick === "function") {
      this.props.onClick();
      return;
    }

    this.props.onPress();
  };

  renderComponent(context) {
    const { children, classname, fluid, size, styles } = this.props;
    const { spacing } = context;

    const style = [];

    const type = this.props.type ? this.props.type : context.type;

    style.push(styles.button);

    if (fluid) style.push(styles.button__fluid);

    if (/xl|lg|sm|xs/.test(size)) {
      style.push(styles[`button__${size}`]);
    }

    if (/primary|success|warning|danger|link/.test(type)) {
      style.push(styles[`button__${type}`]);
    }

    const propagateProps = omit(
      this.props,
      ...[
        "className",
        "css",
        "fluid",
        "onPress",
        "onClick",
        "styles",
        "theme",
        "type"
      ]
    );

    return (
      <button
        onClick={this.handlePress}
        type="button"
        style={{ margin: `0 ${spacing}px` }}
        {...css(style)}
        {...propagateProps}
      >
        {children}
      </button>
    );
  }

  render() {
    return (
      <ButtonGroupContext.Consumer>
        {context => this.renderComponent(context)}
      </ButtonGroupContext.Consumer>
    );
  }
}

Button.defaultProps = {
  fluid: false,
  onPress: () => {},
  size: "",
  type: false
};

const styles = ({ colors, fontFamily, text }) => {
  return {
    button: {
      alignItems: "center",
      userSelect: "none",
      backgroundColor: colors.grayDark,
      border: "1px solid transparent",
      borderRadius: "0.3em",
      color: "white",
      cursor: "pointer",
      display: "flex",
      fontFamily,
      fontSize: text.size,
      fontWeight: "500",
      lineHeight: "2.3em",
      height: "2.4em",
      justifyContent: "center",
      marginBottom: "0",
      overflow: "hidden",
      outline: "none",
      padding: "0 1em",
      textAlign: "center",
      touchAction: "manipulation",
      verticalAlign: "middle",
      whiteSpace: "nowrap",

      ":hover": {
        opacity: 0.8
      }
    },
    button__fluid: {
      width: "100%"
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
      backgroundColor: colors.primary,
      color: "white"
    },
    button__success: {
      backgroundColor: colors.success,
      color: "white"
    },
    button__warning: {
      backgroundColor: colors.warning,
      color: "white"
    },
    button__danger: {
      backgroundColor: colors.danger,
      color: "white"
    },
    button__link: {
      backgroundColor: "transparent",
      color: "#007bff",

      ":hover": {
        textDecoration: "underline"
      }
    }
  };
};

export default withStyles(styles)(Button);
