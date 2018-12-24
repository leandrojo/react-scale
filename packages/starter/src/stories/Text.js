import React from "react";
import { storiesOf } from "@storybook/react";
import { Text } from "@wide/wide-core";

import Decorator, { monospace } from "./Decorator";

const componentInformations = `The ${monospace("Text")}.`;

storiesOf("Text", module)
  .addDecorator(Decorator(componentInformations))
  .add("with short text", () => <Text>Hello storybook</Text>);
