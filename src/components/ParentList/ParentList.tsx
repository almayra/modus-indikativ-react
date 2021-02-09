import React, { CSSProperties, useState } from "react";
import "./parentlist.scss";
import { Settings24, ChevronDown24 } from "@carbon/icons-react";

interface IParentList {
  children: React.ReactNode;
  settingIcon?: boolean;
  labelList: string;
  className?: string;
  style?: CSSProperties;
  menuStyle?: CSSProperties;
}

export const ParentList = ({
  children,
  settingIcon,
  labelList,
  className,
  style,
  menuStyle,
}: IParentList) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleParentList = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`parent-list ${className}`} style={style}>
      <div
        className={`dropdown-parent ${isOpen ? "focus" : ""}`}
        onClick={toggleParentList}
      >
        <div className="title">{labelList}</div>
        <div className="wrapper">
          {settingIcon ? (
            <div className="icon">
              <Settings24 />
            </div>
          ) : null}
          <div className="icon">
            <ChevronDown24 />
          </div>
        </div>
      </div>
      <ul className="menu" style={menuStyle}>
        {children}
      </ul>
    </div>
  );
};

export default ParentList;
