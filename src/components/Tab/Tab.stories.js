import React from "react";
import { Tab } from "./Tab";
import { RadioButton16 } from "@carbon/icons-react";
import "./tab.scss";

export const Playground = (args) => <Tab {...args} />;
Playground.args = { inputLabel: "Menu Title", version: "version-1" };

export const Version = () => (
  <div style={{ display: "flex", flexDirection: "row", gap: 50 }}>
    <Tab inputLabel="Version 01" version="version-1" status="selected" />
    <Tab inputLabel="Version 02" version="version-2" status="selected" />
    <Tab inputLabel="Version 03" version="version-3" status="selected" />
  </div>
);

export const State = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
    Version 1
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Tab version="version-1" inputLabel="Selected" status="selected" />
      <Tab version="version-1" inputLabel="Unselected" status="unselected" />
      <Tab version="version-1" inputLabel="Unselected" status="unselected" />
    </div>
    Version 2
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Tab version="version-2" inputLabel="Selected" status="selected" />
      <Tab version="version-2" inputLabel="Unselected" status="unselected" />
      <Tab version="version-2" inputLabel="Unselected" status="unselected" />
    </div>
    Version 3
    <div style={{ display: "flex", flexDirection: "column", width: 200 }}>
      <Tab version="version-3" inputLabel="Selected" status="selected" />
      <Tab version="version-3" inputLabel="Unselected" status="unselected" />
      <Tab version="version-3" inputLabel="Unselected" status="unselected" />
    </div>
  </div>
);

export const WithIcon = () => (
  <Tab
    icon={<RadioButton16 className="icon" />}
    version="version-3"
    inputLabel="Menu Title"
    status="selected"
  />
);

const TabStory = {
  title: "Atom/Tab",
  component: Tab,
};

export default TabStory;
