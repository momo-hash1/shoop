import { Fab } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../logic/cart";

const GoToShoppingCart = () => {
  const navigate = useNavigate();
  const [cartItem, setCartItem] = React.useState([]);
  React.useEffect(() => setCartItem(getCart()), [getCart()]);
  return (
    <Fab
      sx={{ position: "fixed", bottom: 16, right: 16 }}
      aria-label="like"
      onClick={() => navigate("/cart")}
    >
      <Badge badgeContent={cartItem.length} color="primary">
        <ShoppingCartIcon />
      </Badge>
    </Fab>
  );
};

export default GoToShoppingCart;
