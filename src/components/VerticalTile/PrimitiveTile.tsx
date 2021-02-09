import React, { CSSProperties } from "react";
import "./verticaltile.scss";

interface IPrimitiveTile {
  imageSource: string;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const PrimitiveTile = ({
  imageSource,
  children,
  className,
  style,
}: IPrimitiveTile) => {
  return (
    <div className={`primitive-tile ${className}`} style={style}>
      <img alt="foto" src={imageSource} className="image" />
      {children}
    </div>
  );
};

export default PrimitiveTile;
