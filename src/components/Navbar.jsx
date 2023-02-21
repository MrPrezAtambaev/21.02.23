import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useContext } from "react";
import { productContext } from "../ProductContext";

const indigoTheme = createTheme({
  palette: {
    primary: {
      main: "#01579b",
    },
    secondary: {
      main: "#bf360c",
    },
  },
});

export default function Navbar() {
  const { handleTop } = useContext(productContext);

  return (
    <Box sx={{ flexGrow: 1 }} id="nav">
      <AppBar position="fixed" theme={indigoTheme}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Products
            </Link>
          </Typography>
          <Button
            theme={indigoTheme}
            variant="contained"
            color="secondary"
            onClick={handleTop}
          >
            Add new Products
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
