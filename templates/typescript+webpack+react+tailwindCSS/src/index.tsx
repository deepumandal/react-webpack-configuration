import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"
import App from "./App";

const container: HTMLElement | null = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  throw new Error("Target container is not dom element");
}
