import { Box, Collapse, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { LAYOUT_BORDER } from "../../layout/header/Header";
import { COLOR_PRIMARY_TRANSPARENT_WHITE_10 } from "../../constants/colors";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const BorderContainer = ({ title = "", collapseDownSm = false, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const innerWidth = window.innerWidth;

  const handleToggle = () => setIsOpen((s = false) => !s);

  useEffect(() => {
    if (collapseDownSm) {
      if (innerWidth < 600) {
        setIsOpen(false);
      }
    }
  }, [collapseDownSm, innerWidth]);

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
