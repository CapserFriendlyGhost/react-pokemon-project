import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Favourites from "../pages/Favourites";
import Arena from "../pages/Arena";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Edition from "../pages/Edition";

const AppRouter = ({ searchValue }) => {
  return (
    <Routes>
      <Route path="/" element={<Home searchValue={searchValue} />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/arena" element={<Arena />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/edition" element={<Edition />} />
    </Routes>
  );
};

export default AppRouter;
