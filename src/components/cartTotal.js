import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";
import Grid from "@mui/material/Grid";

const CartTotal = (props) => {
  return (
    <Box sx={{ marginTop: 1, marginBottom: 1 }}>
      <Typography variant="h3">In cart {props.total} items</Typography>
      <Typography variant="h4">Total price: {props.price}</Typography>
      <Grid container gap={5}>
        <Grid item>
          <Button
            variant="contained"
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
