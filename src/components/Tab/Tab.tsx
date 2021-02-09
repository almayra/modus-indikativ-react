import React, { CSSProperties } from "react";
import "./tab.scss";
import BodyShort from "../Typography/BodyShort";

interface ITab {
  version: "version-1" | "version-2" | "version-3";
  status: "selected" | "unselected" | "hover";
  inputLabel: string;
  icon?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Tab = ({
  version,
  status,
  inputLabel,
  icon,
  className,
  style,
}: ITab) => {
  return (
    <div className={`tab-item ${version} ${status} ${className}`} style={style}>
      {icon ? icon : null}
      <BodyShort>{inputLabel}</BodyShort>
    </div>
  );
};

export default Tab;
