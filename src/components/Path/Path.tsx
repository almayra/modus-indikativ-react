import React, { ReactNode } from "react";
import "./path.scss";

interface IPath {
  stage: "start" | "middle" | "end";
  state: "default" | "active" | "complete" | "lost";
  right?: boolean;
  left?: boolean;
  children: ReactNode;
}

export const Path = ({ stage, state, right, left, children }: IPath) => {
  return (
    <div className={`path ${state}`}>
      {right ? <span className={`divider-after`}></span> : null}
      <div className={`${stage}`}>{children}</div>
      {left ? <span className={`divider-before`}></span> : null}
    </div>
  );
};

export default Path;
