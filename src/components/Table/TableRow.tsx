import React from "react";

interface ITableRow extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
  onClick?: any;
  onMouseOver?: any;
}

export const TableRow = ({
  children,
  onClick = () => null,
  onMouseOver,
  ...props
}: ITableRow) => {
  return (
    <tr {...props} onClick={onClick} onMouseOver={onMouseOver}>
      {children}
    </tr>
  );
};

export default TableRow;
