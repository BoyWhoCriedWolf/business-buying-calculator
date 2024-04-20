import { createTheme } from "@mui/material";
import { COLOR_PRIMARY_BLUE } from "../constants/colors";

export const DARK_THEME = createTheme({
  palette: {
    mode: "dark",
    background: { default: COLOR_PRIMARY_BLUE, paper: COLOR_PRIMARY_BLUE },
  },
});
