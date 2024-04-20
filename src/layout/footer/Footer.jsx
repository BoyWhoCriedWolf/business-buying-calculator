import { Box } from "@mui/material";
import React from "react";
import { LAYOUT_BORDER, LAYOUT_UNIT } from "../header/Header";
import { COLOR_PRIMARY_TRANSPARENT_WHITE_10 } from "../../constants/colors";

const Footer = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          bottom: LAYOUT_UNIT,
          width: "100%",
          height: LAYOUT_UNIT,
          borderTop: LAYOUT_BORDER,
          borderBottom: LAYOUT_BORDER,
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          bottom: LAYOUT_UNIT + 3,
          right: LAYOUT_UNIT,
          width: LAYOUT_UNIT,
          height: LAYOUT_UNIT,
          background: COLOR_PRIMARY_TRANSPARENT_WHITE_10,
        }}
      ></Box>
    </Box>
  );
};

export default Footer;
