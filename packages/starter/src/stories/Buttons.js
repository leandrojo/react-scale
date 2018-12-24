import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button, Icons, Text, View } from "@wide/wide-core";

import Decorator, { monospace } from "./Decorator";

const componentInformations = `The ${monospace("Button")}.`;

storiesOf("Button", module)
  .addDecorator(Decorator(componentInformations))
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with auto-width", () => (
    <Button fluid onClick={action("clicked")}>
      Hello Fluid Button
    </Button>
  ))
  .add("types", () => (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <View style={{ paddingRight: 10 }}>
        <Button type="primary" onClick={action("clicked")}>
          Primary Button
        </Button>
      </View>

      <View style={{ paddingRight: 10 }}>
        <Button type="success" onClick={action("clicked")}>
          Success Button
        </Button>
      </View>

      <View style={{ paddingRight: 10 }}>
        <Button type="warning" onClick={action("clicked")}>
          Warning Button
        </Button>
      </View>

      <View style={{ paddingRight: 10 }}>
        <Button type="danger" onClick={action("clicked")}>
          Danger Button
        </Button>
      </View>

      <View style={{ paddingRight: 10 }}>
        <Button type="link" onClick={action("clicked")}>
          Link
        </Button>
      </View>
    </View>
  ))
  .add("sizes", () => (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <View style={{ paddingRight: 10 }}>
        <Button size="xl" onClick={action("clicked")}>
          Extra Large Button
        </Button>
      </View>

      <View style={{ paddingRight: 10 }}>
        <Button size="lg" onClick={action("clicked")}>
          Large Button
        </Button>
      </View>

      <View style={{ paddingRight: 10 }}>
        <Button size="sm" onClick={action("clicked")}>
          Small Button
        </Button>
      </View>

      <View style={{ paddingRight: 10 }}>
        <Button size="xs" onClick={action("clicked")}>
          Extra Small Button
        </Button>
      </View>
    </View>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add("with icons", () => (
    <Button type="danger" onClick={action("clicked")}>
      <Icons.X color="white" size={24} />
    </Button>
  ))
  .add("with icons and text", () => (
    <Button type="success" onClick={action("clicked")}>
      <Icons.DollarSign color="white" size={16} />
      <Text style={{ paddingLeft: 5 }}>Pay on delivery</Text>
    </Button>
  ));
