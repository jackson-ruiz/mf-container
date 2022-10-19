import React from "react";
import ReactDOM from "react-dom";
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

ReactDOM.render(<App />, document.getElementById("app"));
