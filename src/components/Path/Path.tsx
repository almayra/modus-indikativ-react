import React, { CSSProperties, ReactNode } from "react";
import "./path.scss";

interface IPath {
  stage: "start" | "middle" | "end";
  state: "default" | "active" | "complete" | "lost";
  right?: boolean;
  left?: boolean;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Path = ({
  stage,
  state,
  right,
  left,
  children,
  className,
  style,
}: IPath) => {
  return (
    <span className={`path ${state} ${className}`} style={style}>
      {right ? <span className={`divider-after`}></span> : null}
      <span className={`${stage}`}>{children}</span>
      {left ? <span className={`divider-before`}></span> : null}
    </span>
  );
};

export default Path;
