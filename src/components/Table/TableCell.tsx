import React, { CSSProperties, ReactNode } from "react";

interface ITableCell extends React.HTMLAttributes<HTMLTableDataCellElement> {
  children: React.ReactNode;
  colSpan?: number;
  bold?: boolean;
  prepend?: ReactNode;
  dualString?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const TableCell = ({
  children,
  bold,
  prepend,
  dualString,
  colSpan,
  className,
  style,
  ...props
}: ITableCell) => {
  return (
    <td
      {...props}
      colSpan={colSpan}
      style={style}
      className={`${bold ? "bold" : null} ${
        dualString ? "dual-string" : null
      } ${className}`}
    >
      {prepend ? <span className="icon">{prepend}</span> : null}
      {children}
    </td>
  );
};

export default TableCell;
