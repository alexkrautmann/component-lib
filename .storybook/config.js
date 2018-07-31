import { configure, setAddon, addDecorator } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { withKnobs, select } from "@storybook/addon-knobs/react";
import { checkA11y } from '@storybook/addon-a11y';

addDecorator(withKnobs);
addDecorator(checkA11y);
setAddon(JSXAddon);

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /.stories.tsx$/);
function loadStories() {
  require("./welcomeStory");
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
