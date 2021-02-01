import React from "react";

interface ITableHead extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
  dark?: boolean;
}

export const TableHead = ({ children, dark, ...props }: ITableHead) => {
  return (
    <thead {...props} className={`${dark ? "dark" : null}`}>
      {children}
    </thead>
  );
};

export default TableHead;
