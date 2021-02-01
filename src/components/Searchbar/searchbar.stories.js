import { Searchbar } from "./Searchbar";

export const PlayGround = (args) => <Searchbar {...args} />;
PlayGround.args = { placeholder: "Search Box" };

const SearchbarStory = {
  title: "Molecule/Searchbar",
  component: Searchbar,
};

export default SearchbarStory;
