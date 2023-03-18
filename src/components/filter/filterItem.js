import { Paper, Typography } from "@mui/material";

const FilterItem = (props) => {
  return (
    <Paper sx={{ padding: 2, marginBottom: 2 }}>
      <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
        {props.title}{" "}
      </Typography>
      {props.children}
    </Paper>
  );
};

export default FilterItem;
