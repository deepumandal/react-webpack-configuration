import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
} else {
  throw new Error("Target container is not dom element");
}
