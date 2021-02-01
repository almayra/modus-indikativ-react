import React from "react";
import "./verticaltile.scss";

interface IUpperContent {
  label: string;
}

export const UpperContent = ({ label }: IUpperContent) => {
  return <div className="upper-content">{label}</div>;
};

export default UpperContent;
