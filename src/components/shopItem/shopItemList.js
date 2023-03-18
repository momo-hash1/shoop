import { Grid } from "@mui/material";
import ShopItemCard from "./shopItemCard";
import ShopItemSkeletonList from "./shopItemSkeletonList";
import React from "react";

const ShopItemList = (props) => {
  return (
    <React.Fragment>
      {props.loading ? (
        <ShopItemSkeletonList />
      ) : (
        <Grid container spacing={2}>
          {props.shopList.map((shopItem) => {
            return (
              <Grid item md={6} lg={4} xs={12}>
                <ShopItemCard {...shopItem} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </React.Fragment>
  );
};

export default ShopItemList;
