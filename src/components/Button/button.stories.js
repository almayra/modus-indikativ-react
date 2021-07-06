import React from "react";
import { Button } from "./Button.tsx";
import { Document16 } from "@carbon/icons-react";
import { Grid } from "../Layout/Grid/Grid";

const Prepend = () => <Button prepend={<Document16 />}>Prepend</Button>;
const Append = () => <Button append={<Document16 />}>Append</Button>;
const PrependSplit = () => (
  <Button split prepend={<Document16 />}>
    Prepend Split
  </Button>
);
const AppendSplit = () => (
  <Button split append={<Document16 />}>
    Append Split
  </Button>
);

export const Playground = (args) => <Button {...args} />;
Playground.args = { children: "Button Text" };

export const Variants = () => (
  <div>
    <Grid container spacing="01">
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <Button theme="primary">Primary</Button>
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <Button theme="secondary">Secondary</Button>
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <Button theme="tertiary">Tertiary</Button>
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <Button theme="danger">Danger</Button>
      </Grid>
    </Grid>
  </div>
);

export const Size = () => (
  <Grid container spacing="01">
    <Grid item xs={12} sm={12} md={3} lg={3}>
      <Button theme="primary" size="small">
        Small
      </Button>
    </Grid>
    <Grid item xs={12} sm={12} md={3} lg={3}>
      <Button theme="primary">Medium</Button>
    </Grid>
    <Grid item xs={12} sm={12} md={3} lg={3}>
      <Button theme="primary" size="large">
        Large
      </Button>
    </Grid>
  </Grid>
);

export const Disable = () => (
  <Grid container spacing="01">
    <Grid item xs={12} sm={12} md={3} lg={3}>
      <Button theme="primary">Rest</Button>
    </Grid>
    <Grid item xs={12} sm={12} md={3} lg={3}>
      <Button theme="primary" disabled>
        Disabled
      </Button>
    </Grid>
  </Grid>
);

export const WithIcon = () => (
  <div>
    <Grid container spacing="01">
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <Prepend />
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <PrependSplit />
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <Append />
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <AppendSplit />
      </Grid>
    </Grid>
  </div>
);

const ButtonStory = {
  title: "Empofarm/Atom/Button",
  component: Button,
};

export default ButtonStory;
