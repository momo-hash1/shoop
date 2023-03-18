import Filter from "../filter/filter";
import React from "react";
import ShopItemList from "../shopItem/shopItemList";
import WithAside from "../withAside";
import GoToShoppingCart from "../nav/goToShoppingCart";
import Paginator from "../paginator";
import useProduct from "../../logic/useProduct";
import { Typography } from "@mui/material";

const ShopPage = () => {
  const { items, loading, offset, max, retrive, filter, setOffset } =
    useProduct();

  const [query, setQuery] = React.useState({});

  React.useEffect(() => {
    if (Object.keys(query).length !== 0) {
      filter(query);
      return;
    }
    retrive();
  }, [offset, query]);

  return (
    <React.Fragment>
      <WithAside
        aside={
          <Filter
            filterProducts={(query) => setQuery(query)}
            hasQuery={Object.keys(query).length > 0}
            clear={() => {
              setQuery({});
              setOffset(1);
            }}
          />
        }
      >
        <ShopItemList shopList={items} loading={loading} />

        {items.length > 0 && max > 5 && (
          <Paginator page={offset} setPage={setOffset} amount={max} />
        )}
      </WithAside>
      <GoToShoppingCart />
    </React.Fragment>
  );
};

export default ShopPage;
