import React from "react";
import Heading from "../Typography/Heading";
import BodyLong from "../Typography/BodyLong";
import "./verticaltile.scss";

interface ICardSection {
  labelTitle: string;
  supportingLabel: string;
  children: React.ReactNode;
}

export const CardSection = ({
  labelTitle,
  supportingLabel,
  children,
}: ICardSection) => {
  return (
    <div className="card-section">
      <Heading variant="03">{labelTitle}</Heading>
      <BodyLong variant="01">{supportingLabel}</BodyLong>
      <div className="badge-container">
        {children}
        {/* <Badge className="badge" color="light-gray" inputLabel="Label" />
        <Badge className="badge" color="light-gray" inputLabel="Label" />
        <Badge className="badge" color="light-gray" inputLabel="Label" />
        <Badge className="badge" color="light-gray" inputLabel="Label" /> */}
      </div>
    </div>
  );
};

export default CardSection;
