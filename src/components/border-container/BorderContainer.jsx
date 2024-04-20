import { Box, Typography } from "@mui/material";
import React from "react";
import { LAYOUT_BORDER } from "../../layout/header/Header";
import { COLOR_PRIMARY_TRANSPARENT_WHITE_10 } from "../../constants/colors";

const BorderContainer = ({ title = "", children }) => {
  return (
    <Box sx={{ border: LAYOUT_BORDER }}>
      <Box
        sx={{
          p: 1,
          borderBottom: LAYOUT_BORDER,
          background: COLOR_PRIMARY_TRANSPARENT_WHITE_10,
        }}
      >
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box sx={{ p: 1 }}>{children}</Box>
    </Box>
  );
};

export default BorderContainer;
