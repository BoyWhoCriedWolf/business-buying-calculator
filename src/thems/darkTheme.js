import { createTheme } from "@mui/material";
import { PRIMARY_BLUE } from "../constants/colors";

export const DARK_THEME = createTheme({
  palette: {
    mode: "dark",
    background: { default: PRIMARY_BLUE, paper: PRIMARY_BLUE },
  },
});
