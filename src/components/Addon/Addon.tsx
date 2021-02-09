import React, { CSSProperties } from "react";
import "./addon.scss";
import Label from "../Input/Label";

interface IAddon {
  state: "icon" | "text-icon";
  label: string;
  icon?: React.ReactNode;
  container: boolean;
  className?: string;
  style?: CSSProperties;
}

export const Addon = ({
  label,
  icon,
  container,
  state,
  className,
  style,
}: IAddon) => {
  const mode = container === true ? "-container" : "";
  return (
    <div className={`component-container ${state} ${className}`} style={style}>
      <span className={[`addon`, mode].join("")}>
        {icon ? icon : null}
        {label ? <Label>{label}</Label> : ""}
      </span>
    </div>
  );
};

export default Addon;

Addon.defaultProps = {
  label: "Input Label",
  container: true,
};
