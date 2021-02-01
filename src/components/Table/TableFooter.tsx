import React from "react";

interface ITableFooter extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export const TableFooter = ({ children, ...props }: ITableFooter) => {
  return <tfoot {...props}>{children}</tfoot>;
};

export default TableFooter;
