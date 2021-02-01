import React, { CSSProperties } from "react";
import "./checkbox.scss";

interface ICheckbox {
  checked: boolean;
  indeterminate?: boolean;
  theme: "monochrome" | "green";
  size?: "default" | "small" | "xsmall";
  label?: string;
  containerStyle: CSSProperties;
  className?: string;
}

export const Checkbox = ({
  checked,
  theme = "monochrome",
  size = "default",
  indeterminate,
  label,
  containerStyle,
  className,
}: ICheckbox) => {
  const renderCheckboxIcon = () => {
    if (indeterminate === true) {
      return `indeterminate ${size}`;
    } else {
      return `checkbox ${size}`;
    }
  };
  return (
    <div
      className={`container-component ${theme} ${className}`}
      style={{ ...containerStyle }}
    >
      <input type="checkbox" checked={checked} />
      <span className={renderCheckboxIcon()}></span>
      {label ? <div style={{ marginLeft: 30 }}>{label}</div> : ""}
    </div>
  );
};

export default Checkbox;
