import React from "react";
import "./typography.scss";
import { ITypography } from "./ITypography";

interface IBodyShort extends ITypography {
  variant?: "01" | "02";
}

const BodyShort = ({
  bold,
  children,
  className = "",
  style,
  variant = "01",
  color,
}: IBodyShort) => {
  return (
    <div
      style={{ color, ...style }}
      className={`typography body-short-${variant} ${
        bold ? "bold" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default BodyShort;
