/* @flow */

import React, { Component } from "react";
import * as Icons from "react-feather";
import { omit } from "underscore";

import { css, withStyles } from "~/common/theme";

class Badge extends Component<void, Props> {
  state = {};

  handlePressClose = ev => {
    ev.preventDefault();

    this.props.onClose();
  };

  render() {
    const { children, classname, pill, removable, size, styles } = this.props;

    const style = [];
    const styleClose = [];

    const type = this.props.type;

    style.push(styles.badge);
    styleClose.push(styles.badgeClose);

    if (pill) {
      style.push(styles.badge__pill);
      styleClose.push(styles.badgeClose__pill);
    }

    if (removable) style.push(styles.badge__removable);

    if (/lg|sm/.test(size)) {
      style.push(styles[`badge__${size}`]);
      styleClose.push(styles[`badge__${size}`]);
    }

    if (/primary|success|warning|danger|link/.test(type)) {
      style.push(styles[`badge__${type}`]);
      styleClose.push(styles[`badge__${type}`]);
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

    const content = (
      <span {...css(style)} {...propagateProps}>
        {children}
      </span>
    );

    if (removable) {
      return (
        <span {...css(styles.content)}>
          {content}
          <span {...css(styleClose)}>
            <Icons.X size={16} color="white" />
          </span>
        </span>
      );
    }

    return content;
  }
}

Badge.defaultProps = {
  removable: false,
  pill: false,
  onPress: () => {},
  size: "",
  type: false
};

const styles = ({ colors, fontFamily, text }) => {
  return {
    content: {
      display: "flex",
      flexDirection: "row",
      flex: 1,
      margin: 0,
      padding: 0
    },
    badge: {
      alignItems: "center",
      userSelect: "none",
      backgroundColor: colors.grayDark,
      border: "1px solid transparent",
      borderRadius: "0.3em",
      color: "white",
      fontFamily,
      fontSize: "90%",
      fontWeight: "500",
      height: "1.4em",
      justifyContent: "center",
      marginBottom: "0",
      overflow: "hidden",
      padding: "0 1em",
      textAlign: "center",
      verticalAlign: "middle",
      whiteSpace: "nowrap"
    },
    badge__removable: {
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0
    },
    badge__pill: {
      borderRadius: "1em"
    },
    badge__sm: {
      fontSize: "70%"
    },
    badge__lg: {
      fontSize: "110%"
    },
    badge__primary: {
      backgroundColor: colors.primary,
      color: "white"
    },
    badge__success: {
      backgroundColor: colors.success,
      color: "white"
    },
    badge__warning: {
      backgroundColor: colors.warning,
      color: "white"
    },
    badge__danger: {
      backgroundColor: colors.danger,
      color: "white"
    },
    badgeClose: {
      alignItems: "center",
      userSelect: "none",
      backgroundColor: colors.grayDark,
      border: "1px solid transparent",
      color: "white",
      cursor: "pointer",
      display: "flex",
      fontSize: "90%",
      fontWeight: "500",
      height: "1.4em",
      justifyContent: "center",
      marginLeft: "0.1em",
      overflow: "hidden",
      padding: "0 0.65em 0 0.6em",
      textAlign: "center",
      verticalAlign: "middle",
      whiteSpace: "nowrap",
      width: 10,

      ":hover": {
        opacity: 0.8
      }
    },
    badgeClose__pill: {
      borderBottomRightRadius: "1em",
      borderTopRightRadius: "1em"
    }
  };
};

export default withStyles(styles)(Badge);
