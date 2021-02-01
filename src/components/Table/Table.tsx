import React, { ReactNode } from "react";
import "./table.scss";

interface ITable extends React.HTMLAttributes<HTMLTableElement> {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}

export const Table = ({ children, className, bordered, ...props }: ITable) => {
  return (
    <table
      {...props}
      className={`component-table ${className} ${bordered ? "bordered" : null}`}
    >
      {children}
    </table>
  );
};

export default Table;
