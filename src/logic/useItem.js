import React from "react";

const useItems = ({ get, filterItem }) => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [offset, setOffset] = React.useState(1);
  const [max, setMax] = React.useState();

  const retrive = () => {
    setLoading(true);
    get(offset).then((r) => {

      setItems(r.item);
      setMax(r.max);
      setLoading(false);
    });
  };
  const filter = (filterQuery) => {
    setLoading(true);
    filterItem(offset, filterQuery).then((r) => {
      setItems(r.item);
      setMax(r.max);
      setLoading(false);
    });
  };
  return { retrive, filter, setOffset, items, loading, offset, max };
};

export default useItems;
