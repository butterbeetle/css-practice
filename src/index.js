import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Packages from "./packages/packages";
// import Examplar from "./examplar/examplar";
import Customers from "./components/Customers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/customers" element={<Customers />} />
      {/* <Route path="/examplar" element={<Examplar />} /> */}
    </Routes>
  </BrowserRouter>
);
