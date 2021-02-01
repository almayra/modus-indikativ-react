import { Breadcrumb } from "./Breadcrumb";

export const PlayGround = (args) => <Breadcrumb {...args} />;
PlayGround.args = { inputLabel: "Label" };

const BreadcrumbStory = {
  title: "Atom/Breadcrumb",
  component: Breadcrumb,
};

export default BreadcrumbStory;
