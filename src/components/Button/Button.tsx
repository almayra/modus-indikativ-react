import React, { CSSProperties, ReactNode } from "react";
import "./button.scss";

interface IButton {
  theme: "primary" | "secondary" | "tertiary" | "danger";
  // state: "rest" | "hover" | "onclick" | "disabled";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  append?: ReactNode;
  prepend?: ReactNode;
  split?: boolean;
  containerStyle?: CSSProperties;
  className?: string;
}

export const Button = ({
  theme,
  size = "medium",
  children,
  append,
  prepend,
  split,
  containerStyle = {},
  className,
  ...props
}: IButton) => {
  return (
    <button
      type="button"
      className={[
        "component-btn",
        `component-btn-${size}`,
        `component-btn-${theme}`,
        `${className}`,
      ].join(" ")}
      {...props}
      style={containerStyle}
    >
      {prepend ? (
        <span
          className={`component-btn-icon component-btn-icon-prepend ${
            split ? "component-btn-icon-split" : ""
          }`}
        >
          {prepend}
        </span>
      ) : null}
      {children}
      {append ? (
        <span
          className={`component-btn-icon component-btn-icon-append ${
            split ? "component-btn-icon-split" : ""
          }`}
        >
          {append}
        </span>
      ) : null}
    </button>
  );
};

Button.defaultProps = {
  state: "rest",
  backgroundColor: null,
  size: "medium",
  onClick: undefined,
};

export default Button;
