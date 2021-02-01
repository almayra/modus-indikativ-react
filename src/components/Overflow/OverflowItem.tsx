import React, { ReactNode } from "react";
import Metadata from "../Typography/Metadata";
import "./overflow.scss";

interface IOverflowItem {
  children: ReactNode;
  size?: "small" | "default" | "large";
  className: string;
}

export const OverflowItem = ({
  children,
  size = "default",
  className,
}: IOverflowItem) => {
  return (
    <li className={`menu-item ${size} ${className}`}>
      <Metadata variant="02">{children}</Metadata>
    </li>
  );
};

export default OverflowItem;
