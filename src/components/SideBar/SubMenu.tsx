import React, { ReactNode } from "react";
import "./sidebar.scss";

interface ISubMenu {
  label: string;
  active?: boolean;
  children?: ReactNode;
}

export const SubMenu = ({ label, active, children }: ISubMenu) => {
  return (
    <li className={`${active ? "active" : ""}`}>
      {label} {children}
    </li>
  );
};

export default SubMenu;
