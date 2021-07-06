import styles from "./spacing.module.scss";
import React from "react";

export const Spacing = () => (
  <div>
    <div>
      <table
        style={{
          width: "100%",
          textAlign: "left",
          fontFamily: "sans-serif",
        }}
      >
        <thead>
          <tr>
            <th>Token</th>
            <th> Rem</th>
            <th> Px</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody className={styles.spacing}>
          <tr>
            <th>$spacing-01</th>
            <th>0.25 rem</th>
            <th>4 px</th>
            <th>
              <span className={styles.spacing01}></span>
            </th>
          </tr>
          <tr>
            <th>$spacing-02</th>
            <th>0.5 rem</th>
            <th>8 px</th>
            <th>
              <span className={styles.spacing02}></span>
            </th>
          </tr>
          <tr>
            <th>$spacing-03</th>
            <th>1 rem</th>
            <th>16 px</th>
            <th>
              <span className={styles.spacing03}></span>
            </th>
          </tr>
          <tr>
            <th>$spacing-04</th>
            <th>1.5 rem</th>
            <th>24 px</th>
            <th>
              <span className={styles.spacing04}></span>
            </th>
          </tr>
          <tr>
            <th>$spacing-05</th>
            <th>2 rem</th>
            <th>32 px</th>
            <th>
              <span className={styles.spacing05}></span>
            </th>
          </tr>
          <tr>
            <th>$spacing-06</th>
            <th>2.5 rem</th>
            <th>40 px</th>
            <th>
              <span className={styles.spacing06}></span>
            </th>
          </tr>
          <tr>
            <th>$spacing-07</th>
            <th>3 rem</th>
            <th>48 px</th>
            <th>
              <span className={styles.spacing07}></span>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const SpacingStory = {
  title: "Empofarm/Atom/Spacing Token",
  parameters: {
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true,
      },
    },
  },
};

export default SpacingStory;
