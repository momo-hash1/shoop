import React from "react";
import Grid from "@mui/material/Grid";
import ShopItemList from "../shopItem/shopItemList";
import ReturnTo from "../nav/returnTo";
import { Container } from "@mui/system";
import CartTotal from "../cartTotal";
import useProduct from "../../logic/useProduct";
import { clearCart, getCart } from "../../logic/cart";
import useOrder from "../../logic/useOrder";

const CartPage = () => {
  const [items, setItem] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const { order } = useOrder();

  React.useEffect(() => {
    setItem(getCart());
    setTotal(calcTotal(getCart()));
    setTotalPrice(calcTotalPrice(getCart()));

    const listenStorage = () => {
      const cart = getCart();
      setItem(cart);
      setTotal(calcTotal(cart));
      setTotalPrice(calcTotalPrice(cart));
    };
    window.addEventListener("storage", listenStorage);
    return () => window.removeEventListener("storage", listenStorage);
  }, []);

  const calcTotal = (arr) => {
    let total = 0;
    arr.forEach((x) => {
      total += x.amount;
    });
    return total;
  };

  const calcTotalPrice = (arr) => {
    let total = 0;
    arr.forEach((x) => {
      total += x.amount * x.item.regular_price.value;
    });
    return total;
  };

  return (
    <Container sx={{ marginTop: 5 }}>
      <ReturnTo link="/" title="Go home" />
      <CartTotal
        total={total}
        price={totalPrice}
        clearCart={clearCart}
        doOrder={() => order(getCart())}
      />
      <ShopItemList shopList={items.map((x) => x.item)} />
    </Container>
  );
};
export default CartPage;
