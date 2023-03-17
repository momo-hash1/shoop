import React from "react";
import Grid from "@mui/material/Grid";
import ShopItemList from "../shopItem/shopItemList";
import ReturnTo from "../nav/returnTo";
import { Container } from "@mui/system";
import CartTotal from "../cartTotal";

const CartPage = () => {
  return (
    <Container sx={{marginTop: 5}}>
      <ReturnTo link="/" title="Go home"/>
        <CartTotal total={5} price={100}/>
      <ShopItemList />
    </Container>
  );
};
export default CartPage;
