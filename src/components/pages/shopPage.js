import Filter from "../filter/filter";
import React from "react";
import ShopItemList from "../shopItem/shopItemList";
import WithAside from "../withAside";
import GoToShoppingCart from "../nav/goToShoppingCart";
import Paginator from "../paginator";

const ShopPage = () => {
  return (
    <React.Fragment>
      <WithAside aside={<Filter />}>
        <ShopItemList />
        <Paginator/>
      </WithAside>
      <GoToShoppingCart />
    </React.Fragment>
  );
};

export default ShopPage;
