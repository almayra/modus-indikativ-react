import React from "react";
import "./verticaltile.scss";

interface IPrimitiveTile {
  imageSource: string;
  children: React.ReactNode;
}

export const PrimitiveTile = ({ imageSource, children }: IPrimitiveTile) => {
  return (
    <div className="primitive-tile">
      <img alt="foto" src={imageSource} className="image" />
      {children}
    </div>
  );
};

export default PrimitiveTile;
