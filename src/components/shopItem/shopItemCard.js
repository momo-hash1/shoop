import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AmountSelector from "../amountSelector";
import PriceLabel from "../priceLabel";
import Grid from "@mui/material/Grid";

const ShopItemCard = (props) => {
  const inCart = true;
  return (
    <Card>
      <CardMedia
        image={props.image}
        sx={{
          height: 300,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}{" "}
          {inCart && <Typography variant="overline">(in cart)</Typography>}
        </Typography>
        <Grid container alignItems="center" gap={2}>
          <Grid item>
            <Typography variant="subtitle1">Price:</Typography>
          </Grid>
          <Grid item>
            <PriceLabel
              price={props.regular_price.value}
              currency={props.regular_price.currency}
            />
          </Grid>
        </Grid>

        <Typography variant="subtitle1">Amount: </Typography>
        <AmountSelector />
      </CardContent>
      <CardActions>
        {inCart ? (
          <React.Fragment>
            <Button size="small" onClick={() => {}}>
              Remove from cart
            </Button>
          </React.Fragment>
        ) : (
          <Button size="small">Add to cart</Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ShopItemCard;
