import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pagination from "./pages/Pagination";
import Layout from "./pages/Layout";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pagination" element={<Pagination />} />
      <Route path="/layout" element={<Layout />} />
    </Routes>
  );
}

export default App;
