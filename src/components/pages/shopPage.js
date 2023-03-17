import Filter from "../filter/filter";
import React from "react";
import ShopItemList from "../shopItem/shopItemList";
import WithAside from "../withAside";
import GoToShoppingCart from "../nav/goToShoppingCart";

const ShopPage = () => {
  return (
    <React.Fragment>
      <WithAside aside={<Filter />}>
        <ShopItemList />
      </WithAside>
      <GoToShoppingCart />
    </React.Fragment>
  );
};

export default ShopPage;
