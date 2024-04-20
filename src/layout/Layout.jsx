import { Box, Paper } from "@mui/material";
import React from "react";
import Footer from "./footer";
import Header from "./header";
import { LAYOUT_UNIT } from "./header/Header";

const Layout = ({ children }) => {
  return (
    <Paper
      elevation={0}
      sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />
      <Box
        sx={{
          flexGrow: 1,
          px: (LAYOUT_UNIT * 2) / 8,
          pb: (LAYOUT_UNIT * 2) / 8,
        }}
      >
        <Box sx={{ p: 2 }}>{children}</Box>
      </Box>
      <Footer />
    </Paper>
  );
};

export default Layout;
