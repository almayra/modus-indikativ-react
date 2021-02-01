import React from "react";

interface IButtonGroup {
  children: React.ReactNode;
}

export const ButtonGroup = ({ children }: IButtonGroup) => {
  return <span>{children}</span>;
};

export default ButtonGroup;
