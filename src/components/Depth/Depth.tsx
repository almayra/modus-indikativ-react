import React from "react";
import "../../sass-modules/_depth.scss";

interface IDepth {
  depth: "4" | "8" | "16" | "64";
  children: React.ReactNode;
}

export const Depth = ({ depth, children }: IDepth) => {
  return (
    <div className="component-depth">
      <div className={`component-depth-${depth}`}>{children}</div>
    </div>
  );
};

export default Depth;
