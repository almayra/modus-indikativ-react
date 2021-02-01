import React from "react";
import { Button } from "../Button/Button";
import "./modal.scss";

interface IModalFooter {
  primaryLabel: string;
  secondaryLabel: string;
}

export const ModalFooter = ({ primaryLabel, secondaryLabel }: IModalFooter) => {
  return (
    <div>
      <Button containerStyle={{ width: "50%" }} theme="primary">
        {primaryLabel}
      </Button>
      <Button
        containerStyle={{ marginLeft: "-1px", width: "50%" }}
        theme="secondary"
      >
        {secondaryLabel}
      </Button>
    </div>
  );
};

export default ModalFooter;
