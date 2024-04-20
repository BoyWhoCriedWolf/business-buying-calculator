import { Box, Typography } from "@mui/material";
import React from "react";
import {
  COLOR_PRIMARY_TRANSPARENT_WHITE_10,
  COLOR_PRIMARY_TRANSPARENT_WHITE_20,
} from "../../constants/colors";
import { APP_NAME } from "../../constants/strings";

export const LAYOUT_BORDER = `solid 3px ${COLOR_PRIMARY_TRANSPARENT_WHITE_20}`;

export const LAYOUT_UNIT =
  window.innerWidth > 1200
    ? 60
    : window.innerWidth > 900
    ? 40
    : window.innerWidth > 600
    ? 30
    : 20;

const Header = () => {
  return (
    <Box sx={{ pt: LAYOUT_UNIT / 8, position: "relative" }}>
      <Box
        sx={{
          position: "relative",
          borderTop: LAYOUT_BORDER,
          borderBottom: LAYOUT_BORDER,
          display: "flex",
          alignItems: "stretch",
          justifyContent: "flex-end",
          px: (LAYOUT_UNIT * 2) / 8,
          height: LAYOUT_UNIT,
        }}
      >
        <Box
          sx={{
            background: COLOR_PRIMARY_TRANSPARENT_WHITE_10,
            display: "flex",
            alignItems: "center",
            p: 1,
          }}
        >
          <Typography variant="h4">{APP_NAME}</Typography>
        </Box>
        <Box
          sx={{
            background: COLOR_PRIMARY_TRANSPARENT_WHITE_10,
            width: LAYOUT_UNIT,
            height: LAYOUT_UNIT,
            position: "absolute",
            top: -(LAYOUT_UNIT + 3),
            left: LAYOUT_UNIT,
            pointerEvents: "none",
          }}
        ></Box>
        <Box
          sx={{
            background: COLOR_PRIMARY_TRANSPARENT_WHITE_10,
            width: LAYOUT_UNIT,
            height: LAYOUT_UNIT,
            position: "absolute",
            top: -(LAYOUT_UNIT + 3),
            right: LAYOUT_UNIT,
            pointerEvents: "none",
          }}
        ></Box>
      </Box>

      {/* left column */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: LAYOUT_UNIT - 3,
          width: LAYOUT_UNIT,
          height: "100vh",
          borderLeft: LAYOUT_BORDER,
          borderRight: LAYOUT_BORDER,
          pointerEvents: "none",
        }}
      ></Box>
      {/* right column */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: LAYOUT_UNIT - 3,
          width: LAYOUT_UNIT,
          height: "100vh",
          borderLeft: LAYOUT_BORDER,
          borderRight: LAYOUT_BORDER,
          pointerEvents: "none",
        }}
      ></Box>
    </Box>
  );
};

export default Header;
