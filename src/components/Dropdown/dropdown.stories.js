import { Dropdown } from "./Dropdown";
import MenuItem from "./MenuItem";
import React from "react";

export const Playground = (args) => <Dropdown {...args} />;
Playground.args = {
  dropdownTitle: "Dropdown",
  prepend: true,
  append: true,
  dropdownLabel: "Dropdown Label",
};

export const DropdownMenu = () => (
  <Dropdown
    dropdownTitle="Dropdown"
    dropdownLabel="Dropdown Label"
    prepend
    append
  >
    <MenuItem>Menu Item #1</MenuItem>
    <MenuItem>Menu Item #1</MenuItem>
    <MenuItem>Menu Item #1</MenuItem>
    <MenuItem>Menu Item #1</MenuItem>
  </Dropdown>
);

const DropdownStory = {
  title: "Molecule/Dropdown",
  component: Dropdown,
};

export default DropdownStory;
