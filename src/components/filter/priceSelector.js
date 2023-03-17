import React from "react";
import { Grid, Slider, Typography } from "@mui/material";

const PriceSelector = (props) => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={6}>
          <Typography>From: 50</Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container justifyContent={"flex-end"}>
            <Grid item>
              <Typography>To: 100</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={[50, 100]}
        onChange={() => {}}
        valueLabelDisplay="auto"
        getAriaValueText={""}
        disableSwap
      />
    </React.Fragment>
  );
};

export default PriceSelector;
