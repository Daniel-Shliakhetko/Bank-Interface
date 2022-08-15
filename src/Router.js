import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { defaultPath } from "./data/navigation";
import { BillPage } from "./pages/BillPage";
import { CardsPage } from "./pages/CardsPage";
import { ChartPage } from "./pages/ChartPage";
import { FrontPage } from "./pages/FrontPage";
import { Login } from "./pages/Login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={defaultPath+"/"} element={<FrontPage isLoading={true} />} />
        <Route path={defaultPath+"/cards"} element={<CardsPage/>} />
        <Route path={defaultPath+"/auth"} element={<Login />} />
        <Route path={defaultPath+"/analytics"} element={<ChartPage/>} />
        <Route path={defaultPath+"/bills/:id"} element={<BillPage/>} />
      </Routes>
    </BrowserRouter>
  );
};
