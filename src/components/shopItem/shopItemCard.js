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
import Cart, {
  addAmount,
  addToCart,
  getAmount,
  getCart,
  removeFromCart,
} from "../../logic/cart";
import { inCart } from "../../logic/cart";

const ShopItemCard = (props) => {
  const [dirty, setDirty] = React.useState(false);
  const [amount, setAmount] = React.useState(0);
  const [isInCart, setInCart] = React.useState(true);

  React.useEffect(() => {
    setAmount(getAmount(props.id));
  }, []);

  React.useEffect(() => {
    setInCart(inCart(props.id));
    const listenStorage = () => {
      setInCart(inCart(props.id));
    };
    window.addEventListener("storage", listenStorage);
    return () => window.removeEventListener("storage", listenStorage);
  }, []);
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
          {isInCart && <Typography variant="overline">(in cart)</Typography>}
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
        <AmountSelector
          id={props.id}
          amount={amount}
          setDirty={setDirty}
          setAmount={setAmount}
        />
      </CardContent>
      <CardActions>
        {dirty || !isInCart ? (
          <Button
            size="small"
            onClick={() => {
              if (isInCart) {
                addAmount(props.id, amount);
              } else {
                if (amount === 0) return;
                addToCart(props.id, amount, props);
                setInCart(true);
              }
              setDirty(false);
            }}
          >
            Add to cart
          </Button>
        ) : (
          <React.Fragment>
            <Button
              size="small"
              onClick={() => {
                removeFromCart(props.id);
                setDirty(false);
                setInCart(false);
                setAmount(0);
              }}
            >
              Remove from cart
            </Button>
          </React.Fragment>
        )}
      </CardActions>
    </Card>
  );
};

export default ShopItemCard;
