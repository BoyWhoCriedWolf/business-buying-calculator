import { createTheme } from "@mui/material";
import {
  COLOR_PRIMARY_BLUE,
  COLOR_PRIMARY_TRANSPARENT_WHITE_40,
} from "../constants/colors";

export const DARK_THEME = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#fff" },
    background: { default: COLOR_PRIMARY_BLUE, paper: COLOR_PRIMARY_BLUE },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: { borderColor: COLOR_PRIMARY_TRANSPARENT_WHITE_40 },
      },
    },
  },
});
