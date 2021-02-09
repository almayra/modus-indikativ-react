import { Depth } from "./Depth";
import { Source } from "@storybook/addon-docs/blocks";
import React from "react";

const Template = (args) => (
  <Depth {...args}>
    <Source
      language={"js"}
      code={`//import
      import {Depth} from "./Depth"

      //use
      <Depth depth="4 | 8 | 16 | 64">{children}</Depth>

      //documentation
      Depth 4 use for cards and grid item thumbnails
      Depth 8 use for command bars/dropdowns and context menus
      Depth 16 use for teaching callouts and hover cards/tooltips
      Depth 64 use for panels and pop up dialogs
      `}
    />
  </Depth>
);

export const DepthElevation = Template.bind({});
DepthElevation.args = {
  depth: "4",
};

const ElevationStory = {
  title: "Atom/Depth",
  component: Depth,
};

export default ElevationStory;
