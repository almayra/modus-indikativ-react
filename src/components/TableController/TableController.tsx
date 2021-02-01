import React from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { Checkbox } from "../Checkbox/Checkbox";
import { Button } from "../Button/Button";
import { Settings32 } from "@carbon/icons-react";
import "./tablecontroller.scss";

export const TableController = () => {
  return (
    <div className="controller-container">
      <Searchbar width="388px" placeholder="Cari..." />
      <div className="wrapper">
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
        <Checkbox
          containerStyle={{ height: 24 }}
          theme="monochrome"
          checked={true}
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
      </div>
      <Button theme="primary">Button Primary</Button>
    </div>
  );
};

export default TableController;
