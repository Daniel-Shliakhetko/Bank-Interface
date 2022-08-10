import React from "react";
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import { mainPath } from "./data/navigation";
import { CardsPage } from "./pages/CardsPage";
import { FrontPage } from "./pages/FrontPage";
import { Login } from "./pages/Login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={mainPath} element={<FrontPage isLoading={true} />} />
        <Route path={mainPath+"/cards"} element={<CardsPage/>} />
        <Route path={mainPath+"/auth"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
