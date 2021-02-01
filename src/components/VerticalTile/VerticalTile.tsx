import React from "react";
import "./verticaltile.scss";

interface IVerticalTile {
  children: React.ReactNode;
}

export const VerticalTile = ({ children }: IVerticalTile) => {
  return <div className="vertical-tile">{children}</div>;
};

export default VerticalTile;
