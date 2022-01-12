import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { LogIn } from "./Pages/LogIn";
import { SignUp } from "./Pages/SignUp";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/log-in" element={<LogIn />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
