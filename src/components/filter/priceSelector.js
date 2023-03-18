import React from "react";
import { Grid, Slider, Typography } from "@mui/material";
import getProductsObj from "../../mockData/getProducts";

const PriceSelector = (props) => {
  const { getMax } = getProductsObj();
  const max = getMax();
  const [rangeValue, setRangeValue] = React.useState([0, 100]);
  React.useEffect(() => setRangeValue([0, 100]), [props.isClear]);
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={6}>
          <Typography>
            From: {Math.round((max * rangeValue[0]) / 100)}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container justifyContent={"flex-end"}>
            <Grid item>
              <Typography>
                To: {Math.round((max * rangeValue[1]) / 100)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Slider
        value={rangeValue}
        onChange={(e, val) => {
          setRangeValue(val);
          props.setPrice(val.map((x) => max * (x / 100)));
        }}
        valueLabelDisplay="auto"
        disableSwap
      />
    </React.Fragment>
  );
};

export default PriceSelector;
