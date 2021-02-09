import { TableController } from "./TableController";
import React from "react";
import { Settings32 } from "@carbon/icons-react";
import { Checkbox } from "../Checkbox/Checkbox";

export const TableControllerUI = (args) => <TableController {...args} />;
TableControllerUI.args = { buttonLabel: "Button Primary" };

export const Default = () => (
  <TableController buttonLabel="Button Primary">
    <Checkbox
      containerStyle={{ height: 24 }}
      theme="monochrome"
      checked={false}
      label="Menu"
      className="item"
    />
    <Checkbox
      containerStyle={{ height: 24 }}
      theme="monochrome"
      checked={false}
      label="Menu"
      className="item"
    />
    <Checkbox
      containerStyle={{ height: 24 }}
      theme="monochrome"
      checked={true}
      label="Menu"
      className="item"
    />
    <Settings32 className="item" />
  </TableController>
);

const TableControllerStory = {
  title: "Molecule/Table Controller",
  component: TableController,
};

export default TableControllerStory;
