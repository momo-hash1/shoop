import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";
import Grid from "@mui/material/Grid";
import { getCart } from "../logic/cart";

const CartTotal = (props) => {
  const [hasItem, setHasItem] = React.useState(false)
  React.useEffect(() => {
    setHasItem(getCart().length === 0)
    const listenStorage = () => {
      setHasItem(getCart().length === 0)
    };
    window.addEventListener("storage", listenStorage);
    return () => window.removeEventListener("storage", listenStorage);
  }, []);
  return (
    <Box sx={{ marginTop: 1, marginBottom: 1 }}>
      <Typography variant="h3">In cart {props.total} items</Typography>
      <Typography variant="h4">Total price: {props.price}</Typography>
      <Grid container gap={5}>
        <Grid item>
          <Button
            variant="contained"
            disabled={hasItem}
            onClick={() => props.doOrder()}
            sx={{ marginTop: 2, marginBottom: 2 }}
          >
            Order
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="error"
            disabled={hasItem}

            onClick={() => props.clearCart()}
            sx={{ marginTop: 2, marginBottom: 2 }}
          >
            Clear cart
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartTotal;
