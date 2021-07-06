import { Breadcrumb } from "./Breadcrumb";
import React from "react";

export const PlayGround = (args) => <Breadcrumb {...args} />;
PlayGround.args = { inputLabel: "Label" };

const BreadcrumbStory = {
  title: "Empofarm/Atom/Breadcrumb",
  component: Breadcrumb,
};

export default BreadcrumbStory;
