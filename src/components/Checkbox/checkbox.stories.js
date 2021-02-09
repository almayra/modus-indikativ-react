import { Checkbox } from "./Checkbox.tsx";
import React from "react";

export const PlayGround = (args) => <Checkbox {...args} />;
PlayGround.args = {
  theme: "monochrome",
};

export const States = () => (
  <div style={{ display: "flex", flexDirection: "row", gap: 50 }}>
    <Checkbox theme="monochrome" />
    <Checkbox theme="monochrome" checked="true" />
    <Checkbox theme="monochrome" indeterminate={true} checked={true} />
  </div>
);

export const Theme = () => (
  <div style={{ display: "flex", flexDirection: "row", gap: 50 }}>
    <Checkbox theme="monochrome" checked={true} />
    <Checkbox theme="green" checked={true} />
  </div>
);

export const Size = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      gap: 50,
    }}
  >
    <Checkbox size="default" checked={true} />
    <Checkbox size="small" checked={true} />
    <Checkbox size="xsmall" checked={true} />
  </div>
);

export const WithText = () => (
  <Checkbox size="default" label="Checkbox with text" />
);

const CheckboxStory = {
  title: "Atom/Checkbox",
  component: Checkbox,
};

export default CheckboxStory;
