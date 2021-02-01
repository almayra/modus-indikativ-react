import React from "react";
import "./gridruler.scss";
import cn from "classnames";

interface IGridRuler {
  spacing?: "sm" | "md" | "lg";
}

export const GridRuler = ({ spacing }: IGridRuler) => {
  const classNames = cn("GridRuler", {
    [`GridRuler_spacing_${spacing}`]: spacing,
  });
  return (
    <div className={classNames}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
        <div className={"GridRuler_item"} key={number} />
      ))}
    </div>
  );
};

export default GridRuler;
