import React, { ReactNode } from "react";
import BodyShort from "../Typography/BodyShort";
import "./dropdown.scss";

interface IMenuItem {
  children: ReactNode;
}

export const MenuItem = ({ children }: IMenuItem) => {
  return (
    <li className="menu-item">
      <BodyShort variant="01">{children}</BodyShort>
    </li>
  );
};

export default MenuItem;
