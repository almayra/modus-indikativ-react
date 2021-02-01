import React, { ReactNode } from "react";

interface ITableCell extends React.HTMLAttributes<HTMLTableDataCellElement> {
  children: React.ReactNode;
  colSpan?: number;
  bold?: boolean;
  prepend?: ReactNode;
  dualString?: boolean;
}

export const TableCell = ({
  children,
  bold,
  prepend,
  dualString,
  colSpan,
  ...props
}: ITableCell) => {
  return (
    <td
      {...props}
      colSpan={colSpan}
      className={`${bold ? "bold" : null} ${dualString ? "dual-string" : null}`}
    >
      {prepend ? <span className="icon">{prepend}</span> : null}
      {children}
    </td>
  );
};

export default TableCell;
