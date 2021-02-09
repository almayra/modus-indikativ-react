import React, { CSSProperties } from "react";
import "../../sass-modules/_depth.scss";

interface IDepth {
  depth: "4" | "8" | "16" | "64";
  children: React.ReactNode;
  className?: string;
  containerClassname?: string;
  style?: CSSProperties;
  containerStyle?: CSSProperties;
}

export const Depth = ({
  depth,
  children,
  className,
  containerClassname,
  style,
  containerStyle,
}: IDepth) => {
  return (
    <div
      className={`component-depth ${containerClassname}`}
      style={containerStyle}
    >
      <div className={`component-depth-${depth} ${className}`} style={style}>
        {children}
      </div>
    </div>
  );
};

export default Depth;
