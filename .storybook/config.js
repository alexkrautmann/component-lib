import React from 'react';
import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from "@storybook/addon-info";
import wInfoStyle from "./infoAddonStyles.json";

// configure addons
addDecorator(withInfo({ inline: true, styles: wInfoStyle }));
addDecorator(withKnobs);
addDecorator(checkA11y);

// import all files ending in *.stories.js and intro page
const req = require.context("../src", true, /.stories.tsx$/);
function loadStories() {
  require("./welcomeStory");
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
