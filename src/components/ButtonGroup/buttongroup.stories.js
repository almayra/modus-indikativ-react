import React from "react";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "../Button/Button";

export const ButtonPair = () => (
  <ButtonGroup separate>
    <Button theme="primary">Primary</Button>
    <Button theme="secondary">Secondary</Button>
  </ButtonGroup>
);
const ButtonGroupStory = {
  title: "Empofarm/Molecule/Button Group",
  component: ButtonGroup,
};

export default ButtonGroupStory;
