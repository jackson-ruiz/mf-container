import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import MainTemplate from "./pages/MainTemplate";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <MainTemplate />
    </BrowserRouter>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
