import { Fab } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

const GoToShoppingCart = () => {
  const navigate = useNavigate();

  return (
    <Fab
      sx={{ position: "fixed", bottom: 16, right: 16 }}
      aria-label="like"
      onClick={() => navigate("/cart")}
    >
      <ShoppingCartIcon />
    </Fab>
  );
};

export default GoToShoppingCart;
