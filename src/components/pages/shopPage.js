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

  const [query, setQuery] = React.useState({});

  React.useEffect(() => {
    if (Object.keys(query).length !== 0) {
      filter(offset, query);
      return 
    }
    retrive(offset);
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
            }}
          />
        }
      >
        <ShopItemList shopList={items} loading={loading} />
        <Paginator />
      </WithAside>
      <GoToShoppingCart />
    </React.Fragment>
  );
};

export default ShopPage;
