import React, { CSSProperties } from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { Button } from "../Button/Button";
import "./tablecontroller.scss";

interface ITableController {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  buttonLabel: string;
}

export const TableController = ({
  children,
  className,
  style,
  buttonLabel,
}: ITableController) => {
  return (
    <div className={`controller-container ${className}`} style={style}>
      <Searchbar width="388px" placeholder="Cari..." />
      <div className="wrapper">{children}</div>
      <Button theme="primary">{buttonLabel}</Button>
    </div>
  );
};

export default TableController;
