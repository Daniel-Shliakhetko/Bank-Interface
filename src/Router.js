import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardsPage } from "./pages/CardsPage";
import { FrontPage } from "./pages/FrontPage";
import { Login } from "./pages/Login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage isLoading={true} />} />
        <Route path="/cards" element={<CardsPage/>} />
        <Route path="/auth" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
