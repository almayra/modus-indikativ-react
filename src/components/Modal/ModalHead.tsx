import React from "react";
import Heading from "../Typography/Heading";
import "./modal.scss";

interface IModalHead {
  children: React.ReactNode;
}

export const ModalHead = ({ children }: IModalHead) => {
  return (
    <Heading variant="02" className="modal-head">
      {children}
    </Heading>
  );
};

export default ModalHead;
