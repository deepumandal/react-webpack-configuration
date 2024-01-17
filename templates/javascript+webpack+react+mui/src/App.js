import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const App = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" fontSize={"18px"}>
        h1. Heading Hello client
      </Typography>
    </Box>
  );
};

export default App;
