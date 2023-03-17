import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AmountSelector from "../amountSelector";

const ShopItemCard = (props) => {
  const inCart = true;
  return (
    <Card>
      <CardMedia image="" title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}{" "}
          {inCart && <Typography variant="overline">(in cart)</Typography>}
        </Typography>
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
