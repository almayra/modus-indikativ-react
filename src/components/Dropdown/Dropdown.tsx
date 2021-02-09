import React, { CSSProperties, ReactNode, useState } from "react";
import "./dropdown.scss";
import { ChevronDown16, RadioButton16 } from "@carbon/icons-react";
import BodyShort from "../Typography/BodyShort";

interface IDropdown {
  dropdownTitle: string;
  prepend?: boolean;
  append?: boolean;
  dropdownLabel?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}
export const Dropdown = ({
  dropdownTitle,
  prepend,
  append,
  dropdownLabel,
  children,
  className,
  style,
}: IDropdown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${className}`} style={style}>
      {dropdownLabel ? (
        <BodyShort variant="01">{dropdownLabel}</BodyShort>
      ) : null}
      <div className="toggle">
        <button
          className={`dropdown button ${isOpen ? "focus" : ""}`}
          onClick={toggleDropdown}
        >
          {prepend ? <RadioButton16 className="prepend" /> : null}
          {dropdownTitle}
          {append ? <ChevronDown16 className="append" /> : null}
        </button>
        <ul className="menu">{children}</ul>
      </div>
    </div>
  );
};

export default Dropdown;
