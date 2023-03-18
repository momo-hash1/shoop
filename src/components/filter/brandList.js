import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { green, grey } from "@mui/material/colors";
import useBrand from "../../logic/useBrands";
import SearchInput from "./searchInput";

const BrandList = (props) => {
  const { items, retrive, filter } = useBrand();
  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => retrive(), []);

  React.useEffect(() => {
    if (searchQuery.length === 0) {
      retrive();
      return;
    }
    filter({ title: searchQuery });
  }, [searchQuery]);

  return (
    <React.Fragment>
      <SearchInput search={(t) => setSearchQuery(t)} />
      <List sx={{ width: "100%", height: 400, overflow: "auto" }}>
        {items.map((value) => {
          const checked = props.checked === undefined ? false : props.checked.includes(value.id)
          return (
            <ListItem key={value.id} disablePadding>
              <ListItemButton dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    tabIndex={-1}
                    disableRipple
                    checked={checked}
                    onClick={() => {
                      if(checked){
                        props.brandUnset(value.id)
                        return
                      }
                      props.brandSet(value.id);
                    }}
                    sx={{
                      color: grey[900],
                      "&.Mui-checked": {
                        color: grey[900],
                      },
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={value.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </React.Fragment>
  );
};

export default BrandList;
