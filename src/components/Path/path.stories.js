import { Path } from "./Path";
import { Checkmark16 } from "@carbon/icons-react";

export const PlayGround = (args) => <Path {...args} />;
PlayGround.args = {
  stage: "middle",
  component: "before",
  state: "defailt",
  left: true,
  right: true,
};

export const PathFlow = () => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <Path stage="start" state="complete" left>
      <Checkmark16 />
    </Path>
    <Path stage="middle" state="complete" left right>
      <Checkmark16 />
    </Path>
    <Path stage="middle" state="active" left right>
      Label
    </Path>
    <Path stage="end" state="default" right>
      Label
    </Path>
    {/* <Path stage="middle" state="lost" right left />
    <Path stage="middle" state="active" right left />
    <Path stage="end" state="default" right /> */}
  </div>
);

const PathStory = {
  title: "Molecule/Path",
  component: Path,
};

export default PathStory;
