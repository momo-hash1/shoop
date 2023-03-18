import { Grid } from "@mui/material";
import ShopItemSkeleton from "./shopItemSkeleton";

const ShopItemSkeletonList = () => {
  return (
    <Grid container spacing={2}>
      {Array(6).fill().map((_, index) => {
        return (
          <Grid item md={6} lg={4} xs={12} key={index}>
            <ShopItemSkeleton />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ShopItemSkeletonList;
