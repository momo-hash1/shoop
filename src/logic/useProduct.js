import getProductsObj from "../mockData/getProducts";
import useItems from "./useItem";

const useProduct = () => {
  return useItems(getProductsObj());
};

export default useProduct
