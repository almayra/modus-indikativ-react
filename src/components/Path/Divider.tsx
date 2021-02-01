import React from "react";
import "./path.scss";

interface IDivider {
  stage: "before" | "after";
  state: "default" | "active" | "complete" | "lost";
}

export const Divider = ({ stage }: IDivider) => {
  return <span className={`divider-${stage}`}></span>;
};

export default Divider;
