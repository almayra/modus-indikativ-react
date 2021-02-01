import React from "react";
import BodyShort from "../Typography/BodyShort";
import "./modal.scss";

interface IModalBody {
  children: React.ReactNode;
}

export const ModalBody = ({ children }: IModalBody) => {
  return (
    <BodyShort variant="01" className="modal-body">
      {children}
    </BodyShort>
  );
};

export default ModalBody;
