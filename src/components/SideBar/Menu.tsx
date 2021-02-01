import React, { ReactNode } from "react";
import "./sidebar.scss";
import { Document16 } from "@carbon/icons-react";
import BodyLong from "../Typography/BodyLong";

interface IMenu {
  label: string;
  icon?: boolean;
  children?: ReactNode;
}

export const Menu = ({ label, icon, children }: IMenu) => {
  return (
    <li>
      <div className="icon-wrapper">
        {icon ? <Document16 className="icon" /> : null}
        <BodyLong variant="01">{label}</BodyLong>
        {children}
      </div>
    </li>
  );
};

export default Menu;
