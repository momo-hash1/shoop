import { Button, Grid } from "@mui/material";
import BrandList from "./brandList";
import React from "react";
import PriceSelector from "./priceSelector";
import FilterItem from "./filterItem";

const Filter = (props) => {
  const [changed, setChanged] = React.useState(props.hasQuery);
  const [brands, setBrands] = React.useState([]);
  const [price, setPrice] = React.useState([]);

  React.useEffect(() => setChanged(props.hasQuery), [props.hasQuery]);

  return (
    <React.Fragment>
      <FilterItem title="Brands">
        <BrandList
          brandSet={(brand) => {
            setChanged(false);
            setBrands([...brands, brand]);
          }}
          brandUnset={(brand) => {
            setChanged(false);
            setBrands(brands.filter((x) => x !== brand));
          }}
          checked={brands}
        />
      </FilterItem>
      <FilterItem title="Select price">
        <PriceSelector
          setPrice={(price) => {
            setChanged(false);
            setPrice(price);
          }}
          isClear={price.length === 0}
        />
      </FilterItem>
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item>
          <Button
            size="large"
            onClick={() => {
              if (changed) {
                props.clear();
                setBrands([]);
                setPrice([]);
                return;
              }
              props.filterProducts({ brands, price });
              setChanged(true);
            }}
          >
            {changed ? "Clear filter" : "Show"}
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Filter;
