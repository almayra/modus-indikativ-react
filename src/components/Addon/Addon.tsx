import React from "react";
import "./addon.scss";
import Label from "../Input/Label";

interface IAddon {
  state: "icon" | "text-icon";
  label: string;
  icon?: React.ReactNode;
  container: boolean;
}

export const Addon = ({ label, icon, container, state }: IAddon) => {
  const mode = container === true ? "-container" : "";
  return (
    <div className={`component-container ${state}`}>
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
