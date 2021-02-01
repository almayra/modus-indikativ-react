import React, { ReactNode } from "react";
import "./table.scss";

interface ITableHeadCell
  extends React.HTMLAttributes<HTMLTableHeaderCellElement> {
  children?: ReactNode;
  colSpan?: number;
  accent?: boolean;
  prepend?: ReactNode;
  append?: ReactNode;
}

export const TableHeadCell = ({
  children,
  colSpan,
  accent,
  prepend,
  append,
  ...props
}: ITableHeadCell) => {
  return (
    <th className={`${accent ? "accent" : null}`} {...props} colSpan={colSpan}>
      {prepend ? <span className="icon prepend">{prepend}</span> : null}
      {children}
      {append ? <span className="icon append">{append}</span> : null}
    </th>
  );
};

export default TableHeadCell;
