import { Sidebar } from "./SideBar";
import { Menu } from "./Menu";
import { SubMenu } from "./SubMenu";
import { CounterBadge } from "./CounterBadge";

export const Default = () => (
  <Sidebar>
    <Menu label="Sub-Menu 1" icon></Menu>
    <ul>
      <SubMenu label="Sub Menu Label" active>
        <CounterBadge counter={13} />
      </SubMenu>
      <SubMenu label="Sub Menu Label">
        <CounterBadge counter={99} />
      </SubMenu>
      <SubMenu label="Sub Menu Label">
        <CounterBadge counter={99} />
      </SubMenu>
      <SubMenu label="Sub Menu Label">
        <CounterBadge counter={99} />
      </SubMenu>
    </ul>
    <Menu label="Sub-Menu 2" icon />
    <Menu label="Sub-Menu 3" icon />
    <Menu label="Sub-Menu 4" icon />
    <Menu label="Sub-Menu 5" icon />
    <Menu label="Sub-Menu 6" icon />
  </Sidebar>
);

export const WithoutSubmenu = () => (
  <Sidebar>
    <Menu label="Sub-Menu 1" icon />
    <Menu label="Sub-Menu 2" icon />
    <Menu label="Sub-Menu 3" icon />
    <Menu label="Sub-Menu 4" icon />
    <Menu label="Sub-Menu 5" icon />
    <Menu label="Sub-Menu 6" icon />
  </Sidebar>
);

export const NoIconWithSubmenu = () => (
  <Sidebar>
    <Menu label="Sub-Menu 1"></Menu>
    <ul>
      <SubMenu label="Sub Menu Label" active>
        <CounterBadge counter={13} />
      </SubMenu>
      <SubMenu label="Sub Menu Label">
        <CounterBadge counter={99} />
      </SubMenu>
      <SubMenu label="Sub Menu Label">
        <CounterBadge counter={99} />
      </SubMenu>
      <SubMenu label="Sub Menu Label">
        <CounterBadge counter={99} />
      </SubMenu>
    </ul>
    <Menu label="Sub-Menu 2" />
    <Menu label="Sub-Menu 3" />
    <Menu label="Sub-Menu 4" />
    <Menu label="Sub-Menu 5" />
    <Menu label="Sub-Menu 6" />
  </Sidebar>
);

const SideBarStory = {
  title: "Organism/Side Bar",
  component: Sidebar,
};

export default SideBarStory;
