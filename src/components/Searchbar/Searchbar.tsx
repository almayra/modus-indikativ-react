import React, { CSSProperties } from "react";
import { Search16, Close16 } from "@carbon/icons-react";
import "./searchbar.scss";

interface ISearchbar {
  searchQuery?: string;
  setSearchQuery?: any;
  placeholder?: string;
  width?: number | string;
  containerStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  className?: string;
}

export const Searchbar = ({
  searchQuery = "",
  setSearchQuery,
  placeholder,
  width = "240px",
  containerStyle = {},
  inputStyle = {},
  className = "",
}: ISearchbar) => {
  const [searching, setSearching] = React.useState(false);
  const toggleSearching = () => setSearching(!searching);
  return (
    <div
      style={{ width: width ? width : "100%", ...containerStyle }}
      className={`searchbar ${className}`}
    >
      <div className={`icon icon-search ${searching ? "hide" : ""}`}>
        <Search16 />
      </div>
      <input
        onBlur={toggleSearching}
        onFocus={toggleSearching}
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        onKeyDown={(e) => {
          if (e.key === "Enter") return e.preventDefault();
        }}
        type="text"
        placeholder={placeholder}
        style={{ ...inputStyle }}
      />
      <div
        onClick={() => setSearchQuery("")}
        className={`icon icon-clear ${searchQuery.length ? "" : "hide"}`}
      >
        <Close16 />
      </div>
    </div>
  );
};

export default Searchbar;
