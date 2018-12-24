import React from "react";
import { mapObject } from "underscore";
import { storiesOf } from "@storybook/react";
import { Icons, Text, View, theme } from "@wide/wide-core";

import Decorator, { monospace } from "./Decorator";

const componentInformations = `The ${monospace(
  "Icons"
)} package use ${monospace("react-feather")}.`;

const styles = () => {
  return {
    item: {
      background: "rgba(0, 0, 0, .2)",

      ":hover": {
        background: "rgba(0, 0, 0, .2)"
      }
    }
  };
};

storiesOf("Icons", module)
  .addDecorator(Decorator(componentInformations))
  .add("all icons", () => {
    const icons = [];
    mapObject(Icons, (Icon, name) => {
      icons.push(
        <View
          style={{
            background: "rgba(0, 0, 0, .2)",
            borderRadius: 4,
            display: "inline-block",
            margin: 5,
            padding: 10,
            width: "140px"
          }}
          key={name}
        >
          <View
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Icon color="black" size={24} />
            <Text type="code" style={{ fontSize: 12, paddingTop: 15 }}>
              {name}
            </Text>
          </View>
        </View>
      );
      return;
    });
    return <View style={{ width: "100%" }}>{icons}</View>;
  })
  .add("sizes", () => (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <View style={{ paddingRight: 10 }}>
        <Icons.Camera size={256} />
      </View>
      <View style={{ paddingRight: 10 }}>
        <Icons.Camera size={128} />
      </View>
      <View style={{ paddingRight: 10 }}>
        <Icons.Camera size={64} />
      </View>
      <View style={{ paddingRight: 10 }}>
        <Icons.Camera size={36} />
      </View>
      <View style={{ paddingRight: 10 }}>
        <Icons.Camera size={24} />
      </View>
      <View style={{ paddingRight: 10 }}>
        <Icons.Camera size={16} />
      </View>
    </View>
  ))
  .add("colors", () => (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <View style={{ paddingRight: 10 }}>
        <Icons.Umbrella color="blue" size={64} />
      </View>
      <View style={{ paddingRight: 10 }}>
        <Icons.Mail color="red" size={64} />
      </View>
      <View style={{ paddingRight: 10 }}>
        <Icons.Sun color="yellow" size={64} />
      </View>
    </View>
  ));
