import React, { ReactNode, useState } from "react";
import { OverflowMenuVertical16 } from "@carbon/icons-react";
import "./overflow.scss";
import { Depth } from "../Depth/Depth";

interface IOverflow {
  dark?: boolean;
  children: ReactNode;
  className?: string;
}

export const Overflow = ({ dark, children, className }: IOverflow) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="overflow">
      <Depth depth="4">
        <div className="toggle">
          <button
            className={`overflow button ${isOpen ? "focus" : ""} ${className} ${
              dark ? "dark" : ""
            }`}
            onClick={toggleDropdown}
          >
            <OverflowMenuVertical16 />
          </button>
          <ul className="menu">{children}</ul>
        </div>
      </Depth>
    </div>
  );
};

export default Overflow;
