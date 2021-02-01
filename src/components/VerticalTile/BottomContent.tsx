import React from "react";
import Metadata from "../Typography/Metadata";

interface IBottomContent {
  supportingText: string;
  textLayer: string;
}

export const BottomContent = ({
  supportingText,
  textLayer,
}: IBottomContent) => {
  return (
    <div className="bottom-content">
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
