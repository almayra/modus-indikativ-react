import React, { ReactNode } from "react";
import Label from "./Label";
import BottomText from "./BottomText";
import "./input.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
} from "reactstrap";

interface IInput extends HTMLInputElement {
  state: "rest" | "focused" | "error" | "valid";
  inputText: string;
  inputLabel: string;
  bottomText: string;
  preffix: ReactNode;
  suffix: ReactNode;
  type: "text" | "textarea" | "number" | "password" | "file" | "date";
}

export const CInput = ({
  state = "rest",
  inputText,
  inputLabel,
  bottomText,
  suffix,
  preffix,
  type = "text",
}: IInput) => {
  return (
    <FormGroup className={`input-container input-state-${state}`}>
      {inputLabel ? <Label>{inputLabel}</Label> : ""}
      <InputGroup size="sm">
        {preffix ? (
          <InputGroupAddon addonType="prepend">
            <InputGroupText>{preffix}</InputGroupText>
          </InputGroupAddon>
        ) : (
          ""
        )}
        <Input placeholder={inputText} type={type} className="input" />
        {suffix ? (
          <InputGroupAddon addonType="append">
            <InputGroupText>{suffix}</InputGroupText>
          </InputGroupAddon>
        ) : (
          ""
        )}
      </InputGroup>
      {bottomText ? (
        <BottomText className={`input-bottom-text`}>{bottomText}</BottomText>
      ) : (
        ""
      )}
    </FormGroup>
  );
};

export default CInput;
