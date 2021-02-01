import React, { ReactNode } from "react";
import "./sidebar.scss";

interface ISidebar {
  children: ReactNode;
}

export const Sidebar = ({ children }: ISidebar) => {
  return (
    <nav className="sidebar">
      <ul>{children}</ul>
    </nav>
  );
};

export default Sidebar;
