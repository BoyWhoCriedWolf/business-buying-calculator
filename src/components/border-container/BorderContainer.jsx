import { Box, Collapse, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { LAYOUT_BORDER } from "../../layout/header/Header";
import { COLOR_PRIMARY_TRANSPARENT_WHITE_10 } from "../../constants/colors";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const BorderContainer = ({ title = "", children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => setIsOpen((s = false) => !s);

  return (
    <Box sx={{ border: LAYOUT_BORDER }}>
      <Box
        sx={{
          p: 1,
          borderBottom: LAYOUT_BORDER,
          background: COLOR_PRIMARY_TRANSPARENT_WHITE_10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <IconButton size="small" onClick={handleToggle}>
          {isOpen ? <ArrowUpward /> : <ArrowDownward />}
        </IconButton>
      </Box>
      <Collapse in={isOpen}>
        <Box sx={{ p: 1 }}>{children}</Box>
      </Collapse>
    </Box>
  );
};

export default BorderContainer;
