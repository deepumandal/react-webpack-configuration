import React from "react";
import { Box, Heading } from "@chakra-ui/react";

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
      <Heading>Hello client</Heading>
    </Box>
  );
};

export default App;
