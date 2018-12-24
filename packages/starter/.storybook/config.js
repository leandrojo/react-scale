import { addDecorator, configure } from "@storybook/react";
import { withBackgrounds } from "@storybook/addon-backgrounds";

addDecorator(
  withBackgrounds([
    { name: "twitter", value: "#00aced", default: true },
    { name: "facebook", value: "#3b5998" }
  ])
);

function loadStories() {
  require("../src/stories");
}

configure(loadStories, module);
