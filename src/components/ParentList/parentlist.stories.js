import { ParentList } from "./ParentList";
import React from "react";

export const Playground = (args) => <ParentList {...args} />;
Playground.args = {
  settingIcon: true,
  labelList: "Jagung Pipil",
};

export const Default = () => <ParentList labelList="Jagung Pipil" />;
export const withSettingIcon = () => (
  <ParentList labelList="Jagung Pipil" settingIcon />
);
export const withMenu = () => (
  <ParentList labelList="Jagung Pipil">
    <li>Menu Item</li>
    <li>Menu Item</li>
    <li>Menu Item</li>
    <li>Menu Item</li>
  </ParentList>
);

const ParentListStory = {
  title: "Empofarm/Molecule/Parent List",
  component: ParentList,
};

export default ParentListStory;
