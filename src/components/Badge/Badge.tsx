import React, { ReactNode } from "react";
import "./badge.scss";

interface IBadge {
  color: "gray" | "light-gray" | "white" | "green" | "red" | "yellow";
  inputLabel: ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Badge = ({
  color = "gray",
  inputLabel,
  icon,
  className,
}: IBadge) => {
  return (
    <div className={`label-component label-${color} ${className}`}>
      <span className={["label"].join("")}>
        {icon ? icon : null}
        {inputLabel}
      </span>
    </div>
  );
};

Badge.defaultProps = {
  inputLabel: "Label",
};

export default Badge;
