import React, { CSSProperties } from "react";
import { Select } from "../Select/Select";
import "./topbar.scss";
import Metadata from "../Typography/Metadata";
import { Help16, Notification16, Power16 } from "@carbon/icons-react";
import { Depth } from "../Depth/Depth";

interface ITopBar {
  firstLogo: string;
  secondLogo: string;
  avatar: string;
  username: string;
  adminRole: string;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const TopBar = ({
  firstLogo,
  secondLogo,
  avatar,
  username,
  adminRole,
  children,
  className,
  style,
}: ITopBar) => {
  return (
    <Depth depth="16" containerStyle={{ width: "100%" }}>
      <div className={`navbar-container ${className}`} style={style}>
        <div className="head">
          <img className="logo" src={firstLogo} alt="empofarm" height={32} />
          <img className="logo" src={secondLogo} alt="odoo" height={24} />
          <div className="divider" />
          <Select
            containerStyle={{ backgroundColor: "#fff" }}
            className="select"
            type="inline-select"
            placeholder="User Role"
          >
            {children}
          </Select>
        </div>
        <div className="tail">
          <Help16 />
          <div className="divider" />
          <Notification16 />
          <div className="divider" />
          <Power16 className="icon" />
          <div className="profile">
            <Metadata className="text" variant="02">
              {adminRole}
            </Metadata>
            <div className="divider" />
            <Metadata className="text" variant="02">
              {username}
            </Metadata>
            <img
              src={avatar}
              height={33}
              alt="avatar"
              style={{ borderRadius: 20 }}
            />
          </div>
        </div>
      </div>
    </Depth>
  );
};

export default TopBar;
