import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Home/Home";

const PublicRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default PublicRoute;
