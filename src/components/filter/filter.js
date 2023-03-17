import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BrandList from "./brandList";
import React from "react";
import PriceSelector from "./priceSelector";

const Filter = (props) => {
  return (
    <React.Fragment>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Brands </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <BrandList />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Select price </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PriceSelector />
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
};

export default Filter;
