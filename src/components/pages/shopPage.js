import { Grid } from "@mui/material";
import Filter from "../filter/filter";
import React from "react";

import ShopItemList from "../shopItem/shopItemList";

const ShopPage = () => {
  return (
    <React.Fragment>
      <Grid
        container
        spacing={5}
        direction={{ xs: "column-reverse", md: "row" }}
      >
        <Grid item md={8}>
          <ShopItemList />
        </Grid>
        <Grid item md={4}>
          <Filter />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ShopPage;
