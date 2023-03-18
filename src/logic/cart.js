const inCart = (id) => {
  const cart = getCart();
  return cart.find((x) => x.id === id) !== undefined;
};
const addToCart = (id, amount, item) => {
  const cart = getCart();
  localStorage.setItem("cart", JSON.stringify([...cart, { id, amount, item }]));
  window.dispatchEvent(new Event("storage"));
};
const addAmount = (id, amount) => {
  if (amount === 0) {
    removeFromCart(id);
    return;
  }
  const cart = getCart();
  const updatedCart = cart.map((x) => {
    if (x.id === id) {
      return { ...x, amount: amount };
    } else {
      return x;
    }
  });
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("storage"));

};
const removeFromCart = (id) => {
  const cart = getCart();
  localStorage.setItem("cart", JSON.stringify(cart.filter((x) => x.id !== id)));
  window.dispatchEvent(new Event("storage"));
};
const getCart = () => {
  const cart = localStorage.getItem("cart");
  if (cart === null) return [];
  return JSON.parse(cart);
};
const getAmount = (id) => {
  const cart = getCart();
  const _amount = cart.find((x) => x.id === id)?.amount;
  return _amount === undefined ? 0 : _amount;
};

const clearCart = () => {
  localStorage.setItem("cart", JSON.stringify([]));
  window.dispatchEvent(new Event("storage"));

};

export {
  addToCart,
  inCart,
  addAmount,
  removeFromCart,
  getCart,
  getAmount,
  clearCart,
};
