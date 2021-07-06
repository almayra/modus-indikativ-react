import React from "react";
import { Addon } from "./Addon";
import { ChevronSort16 } from "@carbon/icons-react";

const Template = (args) => <Addon {...args} />;

export const IconWithText = Template.bind({});
IconWithText.args = {
  state: "text-icon",
  label: "Input label",
  icon: <ChevronSort16 className="addon-icon" />,
};

export const Text = Template.bind({});
Text.args = {
  state: "text-icon",
  label: "Input label",
  icon: "",
};

export const Icon = Template.bind({});
Icon.args = {
  state: "icon",
  label: "",
  icon: <ChevronSort16 />,
};

const AddonStory = {
  title: "Empofarm/Atom/Addon",
  component: Addon,
};

export default AddonStory;
