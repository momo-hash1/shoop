import Filter from "../filter/filter";
import React from "react";
import ShopItemList from "../shopItem/shopItemList";
import WithAside from "../withAside";
import GoToShoppingCart from "../nav/goToShoppingCart";
import Paginator from "../paginator";
import useProduct from "../../logic/useProduct";

const ShopPage = () => {
  const { items, loading, retrive, filter } = useProduct();
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    retrive(offset);
  }, [offset]);

  return (
    <React.Fragment>
      <WithAside aside={<Filter />}>
        <ShopItemList shopList={items} loading={loading} />
        <Paginator />
      </WithAside>
      <GoToShoppingCart />
    </React.Fragment>
  );
};

export default ShopPage;
