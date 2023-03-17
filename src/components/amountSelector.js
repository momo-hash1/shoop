import { TextField, Grid, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const AmountSelector = (props) => {
  return (
    <Grid container>
      <Grid item sx={2}>
        <IconButton>
          <RemoveIcon />
        </IconButton>
      </Grid>
      <Grid item sx={8}>
        <TextField id="standard-basic" variant="standard" sx={{ width: 50 }} />
      </Grid>
      <Grid item sx={2}>
        <IconButton>
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default AmountSelector;
