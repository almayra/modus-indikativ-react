import React from "react";
import { Depth } from "../Depth/Depth";
import "./modal.scss";

interface IModal {
  size: "wide" | "xlarge" | "large" | "medium" | "narrow";
  children: React.ReactNode;
  className: string;
}

export const Modal = ({ size, children, className }: IModal) => {
  return (
    <Depth depth="64">
      <div className={`modal-container ${size} ${className}`}>{children}</div>
    </Depth>
  );
};

export default Modal;
