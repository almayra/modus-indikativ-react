import { Select } from "./Select";
import React from "react";

const Template = (args) => <Select {...args} />;

export const IndependentSelect = Template.bind({});
IndependentSelect.args = {
  title: "Select Title",
  type: "independent-select",
  placeholder: "Select Your Option",
};

export const InlineSelect = Template.bind({});
InlineSelect.args = {
  title: "Select Title",
  type: "inline-select",
  placeholder: "Select Your Option",
};

const SelectStory = {
  title: "Empofarm/Molecule/Select",
  component: Select,
};

export default SelectStory;
