import React from "react";
import { Badge } from "./Badge";
import { Document16 } from "@carbon/icons-react";

export const PlayGround = (args) => <Badge {...args} />;
PlayGround.args = { inputLabel: "Input Label" };

export const Variants = () => (
  <div style={{ display: "flex", flexDirection: "row", gap: 50 }}>
    <Badge>Input Label</Badge>
    <Badge color="light-gray">Input Label</Badge>
    <Badge color="white">Input Label</Badge>
    <Badge color="red">Input Label</Badge>
    <Badge color="green">Input Label</Badge>
    <Badge color="yellow">Input Label</Badge>
  </div>
);

export const withIcon = () => (
  <div style={{ display: "flex", flexDirection: "row", gap: 50 }}>
    <Badge icon={<Document16 className="icon" />}>Input Label</Badge>
    <Badge icon={<Document16 className="icon" />} color="light-gray">
      Input Label
    </Badge>
    <Badge icon={<Document16 className="icon" />} color="white">
      Input Label
    </Badge>
    <Badge icon={<Document16 className="icon" />} color="red">
      Input Label
    </Badge>
    <Badge icon={<Document16 className="icon" />} color="green">
      Input Label
    </Badge>
    <Badge icon={<Document16 className="icon" />} color="yellow">
      Input Label
    </Badge>
  </div>
);

const BadgeStory = {
  title: "Atom/Badge",
  component: Badge,
};

export default BadgeStory;
