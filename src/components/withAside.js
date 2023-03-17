import { Grid } from "@mui/material";
import React from "react";

import { Container } from "@mui/system";

const WithAside = (props) => {
  return (
    <Container sx={{ marginTop: 5 }}>
      <Grid
        container
        spacing={5}
        direction={{ xs: "column-reverse", md: "row" }}
      >
        <Grid item md={8}>
          {props.children}
        </Grid>
        <Grid item md={4}>
          {props.aside}
        </Grid>
      </Grid>
    </Container>
  );
};

export default WithAside;
