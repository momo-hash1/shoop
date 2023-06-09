import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Paginator = (props) => {  
  return (
    <Pagination
      sx={{ marginTop: 2, marginBottom: 2 }}
      count={Math.floor(props.amount / 6)+1}
      page={props.page}
      onChange={(e, val) => props.setPage(val)}
      renderItem={(item) => (
        <PaginationItem
          slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
          {...item}
        />
      )}
    />
  );
};

export default Paginator;
