import React, { CSSProperties, ReactNode } from "react";
import BodyShort from "../Typography/BodyShort";
import "./select.scss";

interface ISelect extends React.HTMLAttributes<HTMLSelectElement> {
  type: "independent-select" | "inline-select";
  children: ReactNode;
  title?: string;
  className?: string;
  containerStyle?: CSSProperties;
  placeholder?: string;
}

export const Select = ({
  children,
  title,
  type,
  className,
  containerStyle,
  placeholder,
  ...props
}: ISelect) => {
  return (
    <div className="select-component">
      {title ? <BodyShort variant="01">{title}</BodyShort> : ""}
      <select
        style={containerStyle}
        {...props}
        className={`${type} ${className}`}
      >
        {placeholder ? (
          <option value="" disabled selected>
            {placeholder}
          </option>
        ) : null}
        {children}
      </select>
    </div>
  );
};

export default Select;
