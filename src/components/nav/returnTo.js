import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box/Box";

const ReturnTo = (props) => {
  return (
    <Box sx={{marginTop: 1, marginBottom: 1}}>
      <Link href={props.link} underline="hover">
        <Grid container alignItems="center" gap={2}>
          <Grid item>
            <KeyboardBackspaceIcon />
          </Grid>
          <Grid item>
            <Typography variant="h6">{props.title}</Typography>
          </Grid>
        </Grid>
      </Link>
    </Box>
  );
};

export default ReturnTo;
