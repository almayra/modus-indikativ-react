import React from "react";
import "./input.scss";
import { ITypography } from "../Typography/ITypography";
import Metadata from "../Typography/Metadata";

const BottomText = ({ children, ...props }: ITypography) => {
  return (
    <Metadata variant="01" className="input-label" {...props}>
      {children}
    </Metadata>
  );
};

export default BottomText;
