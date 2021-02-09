import React, { CSSProperties } from "react";

interface ITableHead extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const TableHead = ({
  children,
  className,
  style,
  dark,
  ...props
}: ITableHead) => {
  return (
    <thead
      {...props}
      className={`${dark ? "dark" : null} ${className}`}
      style={style}
    >
      {children}
    </thead>
  );
};

export default TableHead;
