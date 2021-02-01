import React, { ReactNode } from "react";
import "./grid.scss";
import cn from "classnames";

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type JustifyContent = "flex-start" | "center" | "flex-end" | "space-between";
type AlignItems = "flex-start" | "center" | "flex-end";

interface IGrid extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  container?: boolean;
  item?: boolean;
  xs?: Cols;
  sm?: Cols;
  md?: Cols;
  lg?: Cols;
  spacing?: "01" | "02" | "03" | "04" | "05" | "06" | "07";
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
}

export const Grid = ({
  children,
  container,
  item,
  xs,
  sm,
  md,
  lg,
  spacing,
  justifyContent,
  alignItems,
  ...props
}: IGrid) => {
  const classNames = cn({
    ["Grid_container"]: container,
    ["Grid_item"]: item,
    [`Grid_xs_${xs}`]: xs,
    [`Grid_sm_${sm}`]: sm,
    [`Grid_md_${md}`]: md,
    [`Grid_lg_${lg}`]: lg,
    [`Grid_spacing_${spacing}`]: spacing,
    [`Grid_justifyContent_${justifyContent}`]: justifyContent,
    [`Grid_alignItems_${alignItems}`]: alignItems,
  });
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default Grid;
