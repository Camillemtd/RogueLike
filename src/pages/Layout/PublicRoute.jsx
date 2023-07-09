import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Home/Home";
import Class from "../ChooseClass/Class";
import Intro from "../../components/Intro/Intro";
import Map from "../Map/Map";

const PublicRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/class" element={<Class/>}/>
        <Route path="/intro" element={<Intro/>}/>
        <Route path="/map" element={<Map/>}/>
      </Route>
    </Routes>
  );
};

export default PublicRoute;
