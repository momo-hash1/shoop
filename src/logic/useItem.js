import React from "react";

const useItems = ({ get, filterItem }) => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const retrive = (offset) => {
    setLoading(true);
    get(offset).then((r) => {
      setItems(r);
      setLoading(false);
    });
  };
  const filter = (offset, filterQuery) => {
    setLoading(true);
    filterItem(offset, filterQuery).then((r) => {
      setItems(r);
      setLoading(false);
    });
  };
  return { retrive, filter, items, loading };
};

export default useItems;
