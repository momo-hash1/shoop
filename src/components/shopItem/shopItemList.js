import { Grid } from "@mui/material";
import ShopItemCard from "./shopItemCard";

const ShopItemList = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item md={6} lg={4} xs={12}>
        <ShopItemCard />
      </Grid>
    </Grid>
  );
};

export default ShopItemList;
