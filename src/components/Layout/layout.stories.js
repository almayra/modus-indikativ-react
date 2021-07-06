import React from "react";
import { Box } from "./Box/Box";
import { Grid } from "./Grid/Grid";
import { GridRuler } from "./GridRuler/GridRuler";

export const Basic = () => {
  return (
    <div style={{ position: "relative" }}>
      <Grid container spacing="01">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 1</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 2</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 3</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 4</Box>
        </Grid>
      </Grid>
    </div>
  );
};

export const WithRuler = () => {
  return (
    <div style={{ position: "relative" }}>
      <GridRuler spacing="01"></GridRuler>
      <Grid container spacing="01">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 1</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 2</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 3</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 4</Box>
        </Grid>
      </Grid>
    </div>
  );
};

export const PlayGround = (args) => {
  return (
    <div style={{ position: "relative" }}>
      <GridRuler spacing="01"></GridRuler>
      <Grid container spacing="01" {...args}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 1</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 2</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 3</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 4</Box>
        </Grid>
      </Grid>
    </div>
  );
};

const LayoutStory = {
  title: "Empofarm/Atom/Layout",
  component: Grid,
};

export default LayoutStory;
