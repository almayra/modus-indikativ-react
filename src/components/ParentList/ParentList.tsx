import React, { useState } from "react";
import "./parentlist.scss";
import { Settings24, ChevronDown24 } from "@carbon/icons-react";

interface IParentList {
  children: React.ReactNode;
  settingIcon?: boolean;
  labelList: string;
}

export const ParentList = ({
  children,
  settingIcon,
  labelList,
}: IParentList) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleParentList = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="parent-list">
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
      <ul className="menu">{children}</ul>
    </div>
  );
};

export default ParentList;
