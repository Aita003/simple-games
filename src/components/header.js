import { Box, Grid } from "@mui/material";
import logo from "../assets/controller.png";

//---------------------------------------------

export default function HeaderComponent() {
  return (
    <Grid container sx={{ py: 3, px: 1 }}>
      <Grid item xs={4}>
        <Box
          component="img"
          src={logo}
          sx={{
            height: 50,
          }}
        />
      </Grid>
      <Grid item xs={8}></Grid>
    </Grid>
  );
}
