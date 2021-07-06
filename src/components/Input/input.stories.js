import { CInput } from "./Input.tsx";
import { ChevronSort16 } from "@carbon/icons-react";
import React from "react";

export const PlayGround = (args) => <CInput {...args} />;
PlayGround.args = { inputText: "Placeholder", state: "rest" };

export const withIcon = () => (
  <div>
    <CInput preffix={<ChevronSort16 />} inputText="With Leading Icon" />
    <CInput suffix={<ChevronSort16 />} inputText="With Trailing Icon" />
  </div>
);

export const withIconText = () => (
  <div>
    <CInput
      preffix={
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <ChevronSort16 style={{ marginRight: "4" }} /> Input Label
        </div>
      }
      inputText="With Icon-Text"
    />
    <CInput
      suffix={
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <ChevronSort16 style={{ marginRight: "4" }} /> Input Label
        </div>
      }
      inputText="With Icon-Text"
    />
  </div>
);

export const withInputLabel = () => (
  <CInput
    inputLabel="Input Label"
    inputText="Placeholder"
    bottomText="This is helper text"
  />
);

export const withError = () => (
  <CInput inputText="Text Error" bottomText="Error Messages" state="error" />
);

export const Types = () => (
  <div>
    <CInput type="text" inputText="Placeholder" />
    <CInput type="textarea" inputText="Textarea Placeholder" />
    <CInput type="number" inputText="Number Placeholder" />
    <CInput type="password" inputText="Enter password" />
    <CInput type="file" />
    <CInput type="date" />
  </div>
);

const InputStory = {
  title: "Empofarm/Molecule/Form Field",
  component: CInput,
};

export default InputStory;
