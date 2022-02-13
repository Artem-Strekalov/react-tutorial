import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Pagination from "./pages/Pagination";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pagination" element={<Pagination />} />
    </Routes>
  );
}

export default App;
