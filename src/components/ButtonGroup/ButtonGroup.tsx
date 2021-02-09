import React, { CSSProperties } from "react";

interface IButtonGroup {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const ButtonGroup = ({ children, className, style }: IButtonGroup) => {
  return (
    <span className={className} style={style}>
      {children}
    </span>
  );
};

export default ButtonGroup;
