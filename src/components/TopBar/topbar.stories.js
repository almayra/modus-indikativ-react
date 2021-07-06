import { TopBar } from "./TopBar";
import EMPOFARM from "../../assets/images/empofarm.png";
import ODOO from "../../assets/images/odoo.png";
import AVATAR from "../../assets/images/avatar.png";
import React from "react";

export const TopBarAdmin = () => (
  <TopBar
    firstLogo={EMPOFARM}
    secondLogo={ODOO}
    avatar={AVATAR}
    username="Kavi Mahar"
    adminRole="Admin"
  >
    <option>Finance Admin</option>
    <option>Inventory Admin</option>
  </TopBar>
);

const TopBarStory = {
  title: "Empofarm/Organism/Top Bar",
  component: TopBar,
};

export default TopBarStory;
