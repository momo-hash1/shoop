import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import EuroIcon from "@mui/icons-material/Euro";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Typography, Grid } from "@mui/material";
const PriceLabel = (props) => {
  const currencyIcon = {
    usd: <AttachMoneyIcon />,
    rub: <CurrencyRubleIcon />,
    euro: <EuroIcon />,
  };

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Typography variant="body1" sx={{fontWeight: 700}}>{props.price}</Typography>
      </Grid>
      <Grid item>{currencyIcon[props.currency.toLowerCase()]}</Grid>
    </Grid>
  );
};

export default PriceLabel;
