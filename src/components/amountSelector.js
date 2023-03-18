import { TextField, Grid, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import { getAmount } from "../logic/cart";

const AmountSelector = (props) => {
  const amount = props.amount
  const setAmount = props.setAmount
  React.useEffect(() => {
    setAmount(getAmount(props.id));
  }, []);
  return (
    <Grid container>
      <Grid item sx={2}>
        <IconButton
          onClick={() => {
            if (amount > 0) {
              setAmount((prev) => prev - 1);
              props.setDirty(true);
            }
          }}
        >
          <RemoveIcon />
        </IconButton>
      </Grid>
      <Grid item sx={8}>
        <TextField
          id="standard-basic"
          variant="standard"
          sx={{ width: 50 }}
          value={amount}
          onChange={(e, val) => setAmount(val)}
        />
      </Grid>
      <Grid item sx={2}>
        <IconButton
          onClick={() => {
            setAmount((prev) => prev + 1);
            props.setDirty(true);
          }}
        >
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default AmountSelector;
