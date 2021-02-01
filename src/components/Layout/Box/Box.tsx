import React from "react";
import "./box.scss";

interface IBox {
  children: React.ReactNode;
}

export const Box = ({ children }: IBox) => {
  return <div className="box">{children}</div>;
};

export default Box;
