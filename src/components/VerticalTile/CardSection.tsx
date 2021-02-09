import React, { CSSProperties } from "react";
import Heading from "../Typography/Heading";
import BodyLong from "../Typography/BodyLong";
import "./verticaltile.scss";

interface ICardSection {
  labelTitle: string;
  supportingLabel: string;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const CardSection = ({
  labelTitle,
  supportingLabel,
  children,
  className,
  style,
}: ICardSection) => {
  return (
    <div className={`card-section ${className}`} style={style}>
      <Heading variant="03">{labelTitle}</Heading>
      <BodyLong variant="01">{supportingLabel}</BodyLong>
      <div className="badge-container">{children}</div>
    </div>
  );
};

export default CardSection;
