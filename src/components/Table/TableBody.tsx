import React from "react";

interface ITableBody extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
  ref?: any;
}

export const TableBody = ({ children, ref, ...props }: ITableBody) => {
  return (
    <tbody ref={ref} {...props}>
      {children}
    </tbody>
  );
};

export default TableBody;
