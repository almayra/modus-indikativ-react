import React from "react";
import Metadata from "../Typography/Metadata";
import "./sidebar.scss";

interface ICounterBadge {
  counter?: number;
}

export const CounterBadge = ({ counter }: ICounterBadge) => {
  return (
    <div className="counter-badge">
      <Metadata className="text-counter" variant="01">
        {counter}
      </Metadata>
    </div>
  );
};

export default CounterBadge;
