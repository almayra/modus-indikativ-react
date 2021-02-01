import React from "react";
import "./tab.scss";
import BodyShort from "../Typography/BodyShort";

interface ITab {
  version: "version-1" | "version-2" | "version-3";
  status: "selected" | "unselected" | "hover";
  inputLabel: string;
  icon?: React.ReactNode;
}

export const Tab = ({ version, status, inputLabel, icon }: ITab) => {
  return (
    <div className={`tab-item ${version} ${status}`}>
      {icon ? icon : null}
      <BodyShort>{inputLabel}</BodyShort>
    </div>
  );
};

export default Tab;
