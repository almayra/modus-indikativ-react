import React, { CSSProperties } from "react";
import "./verticaltile.scss";

interface IUpperContent {
  label: string;
  className?: string;
  style?: CSSProperties;
}

export const UpperContent = ({ label, className, style }: IUpperContent) => {
  return (
    <div className={`upper-content ${className}`} style={style}>
      {label}
    </div>
  );
};

export default UpperContent;
