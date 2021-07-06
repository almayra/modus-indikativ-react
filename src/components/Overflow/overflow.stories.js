import { Overflow } from "./Overflow";
import OverflowItem from "./OverflowItem";
import React from "react";

export const Playground = (args) => <Overflow {...args} />;
Playground.args = {
  size: "default",
};

export const Variant = () => (
  <div style={{ display: "inline-flex", gap: 16 }}>
    <Overflow dark />
    <Overflow />
  </div>
);

export const MenuItemSize = () => (
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    <div>
      Small
      <Overflow>
        <OverflowItem size="small">Menu Item</OverflowItem>
        <OverflowItem size="small">Menu Item</OverflowItem>
        <OverflowItem size="small">Menu Item</OverflowItem>
        <OverflowItem size="small">Menu Item</OverflowItem>
        <OverflowItem size="small">Menu Item</OverflowItem>
      </Overflow>
    </div>
    <div>
      Default
      <Overflow>
        <OverflowItem size="default">Menu Item</OverflowItem>
        <OverflowItem size="default">Menu Item</OverflowItem>
        <OverflowItem size="default">Menu Item</OverflowItem>
        <OverflowItem size="default">Menu Item</OverflowItem>
        <OverflowItem size="default">Menu Item</OverflowItem>
      </Overflow>
    </div>
    <div>
      Large
      <Overflow>
        <OverflowItem size="large">Menu Item</OverflowItem>
        <OverflowItem size="large">Menu Item</OverflowItem>
        <OverflowItem size="large">Menu Item</OverflowItem>
        <OverflowItem size="large">Menu Item</OverflowItem>
        <OverflowItem size="large">Menu Item</OverflowItem>
      </Overflow>
    </div>
  </div>
);
const OverflowStory = {
  title: "Empofarm/Molecule/Overflow",
  component: Overflow,
};

export default OverflowStory;
