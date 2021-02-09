import React, { CSSProperties } from "react";
import { Depth } from "../Depth/Depth";
import "./modal.scss";

interface IModal {
  size: "wide" | "xlarge" | "large" | "medium" | "narrow";
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Modal = ({ size, children, className, style }: IModal) => {
  return (
    <Depth depth="64">
      <div className={`modal-container ${size} ${className}`} style={style}>
        {children}
      </div>
    </Depth>
  );
};

export default Modal;
