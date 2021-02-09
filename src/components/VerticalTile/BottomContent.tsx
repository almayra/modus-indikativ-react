import React, { CSSProperties } from "react";
import Metadata from "../Typography/Metadata";

interface IBottomContent {
  supportingText: string;
  textLayer: string;
  className?: string;
  style?: CSSProperties;
}

export const BottomContent = ({
  supportingText,
  textLayer,
  className,
  style,
}: IBottomContent) => {
  return (
    <div className={`bottom-content ${className}`} style={style}>
      <Metadata variant="02" style={{ color: "#6e6e6e" }}>
        {supportingText}
      </Metadata>
      <Metadata variant="02" style={{ color: "#404040" }}>
        {textLayer}
      </Metadata>
    </div>
  );
};

export default BottomContent;
