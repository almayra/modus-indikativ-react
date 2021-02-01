import React from "react";
import "./input.scss";
import { ITypography } from "../Typography/ITypography";
import Metadata from "../Typography/Metadata";

const Label = ({ children, bold, ...props }: ITypography) => {
  return (
    <Metadata variant="02" className="input-label" bold {...props}>
      {children}
    </Metadata>
  );
};

export default Label;
