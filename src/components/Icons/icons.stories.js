import React, { useState } from "react";
import { Source } from "@storybook/addon-docs/blocks";
import * as icons from "@carbon/icons-react";
import styles from "./icons.scss";
import { centerDecorator } from "../../utils/storybook/decorators";

export const All = () => {
  const [search, setSearch] = useState("");
  const [iconName, setIconName] = useState("IconName");

  return (
    <div
      style={{
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "sans-serif",
        fontWeight: 500,
      }}
    >
      <div style={{ marginBottom: 24 }}>
        * The following icons import from
        <a
          style={{ paddingLeft: 4 }}
          href={"https://www.carbondesignsystem.com/guidelines/icons/code/"}
        >
          @carbon/icons-react
        </a>
        .
      </div>

      <div className={styles.searchAndCodeContainer}>
        <input
          style={{
            padding: 8,
            border: "2px solid #f1f1f1",
            borderRadius: 8,
            width: 500,
          }}
          placeholder={"Search"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Source
          language={"js"}
          code={`//import
            import { ${iconName} } from '@carbon/icons-react'
            // use        
            <${iconName}/>`}
        />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        {Object.entries(icons).map(([name, Icon]) => {
          if (name.toLowerCase().includes(search.toLowerCase())) {
            return (
              <div
                key={name}
                style={{
                  backgroundColor: "#f1f1f1",
                  width: "200px",
                  maxWidth: "200px",
                  height: "80px",
                  display: "flex",
                  flexDirection: "column",
                  margin: 12,
                  padding: 12,
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  fill: "#000",
                  color: "#000",
                  cursor: "pointer",
                }}
                onClick={() => setIconName(name)}
              >
                <Icon style={{ width: 24, height: 24 }} />
                <div>
                  <span
                    style={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      fontSize: "12px",
                    }}
                  >
                    {name}
                  </span>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

const IconStory = {
  title: "Empofarm/Atom/Icons",
  decorators: [centerDecorator],
  parameters: {
    docs: {
      disabled: true,
    },
    previewTabs: {
      "storybooks/docs/panel": {
        hidden: true,
      },
    },
  },
};

export default IconStory;
