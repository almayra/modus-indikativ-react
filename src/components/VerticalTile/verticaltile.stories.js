import { VerticalTile } from "./VerticalTile";
import IMG from "../../assets/images/1_1.png";
import PrimitiveTile from "./PrimitiveTile";
import BottomContent from "./BottomContent";
import UpperContent from "./UpperContent";
import CardSection from "./CardSection";
import { Badge } from "../Badge/Badge";
import { Overflow } from "../Overflow/Overflow";
import OverflowItem from "../Overflow/OverflowItem";

export const CardSectionTile = () => (
  <VerticalTile>
    <PrimitiveTile imageSource={IMG}>
      <Overflow dark className="component-overflow">
        <OverflowItem className="item-overflow" size="default">
          Menu Item
        </OverflowItem>
      </Overflow>
    </PrimitiveTile>
    <CardSection
      labelTitle="This is Card Section"
      supportingLabel="Card Section"
    >
      <Badge className="badge" color="light-gray" inputLabel="Label" />
      <Badge className="badge" color="light-gray" inputLabel="Label" />
      <Badge className="badge" color="light-gray" inputLabel="Label" />
      <Badge className="badge" color="light-gray" inputLabel="Label" />
    </CardSection>
  </VerticalTile>
);

export const Primary = () => (
  <VerticalTile>
    <UpperContent label="Aa" />
    <PrimitiveTile imageSource={IMG} />
    <BottomContent
      supportingText="20 Januari 2020"
      textLayer="Orci id massa id lacus. Ullamcorper sed pretium eget faucibus condimentum turpis. Sit diam et varius vitae pharetra tellus euismod a vel adipiscing sed sed."
    />
  </VerticalTile>
);

const VerticalTileStory = {
  title: "Organism/Vertical Tile",
  component: VerticalTile,
};

export default VerticalTileStory;
