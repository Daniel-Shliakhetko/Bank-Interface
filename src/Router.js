import React from "react";
import { Routes, Route} from "react-router-dom";
import { mainPath } from "./data/navigation";
import { BillPage } from "./pages/BillPage";
import { CardsPage } from "./pages/CardsPage";
import { ChartPage } from "./pages/ChartPage";
import { ExpensesPage } from "./pages/ExpensesPage";
import { FrontPage } from "./pages/FrontPage";
import { Login } from "./pages/Login";

export const Router = () => {
  return (
      <Routes>
        <Route path={mainPath+"/"} exact element={<FrontPage isLoading={true} />} />
        <Route path={mainPath+"/cards"} exact element={<CardsPage/>} />
        <Route path={mainPath+"/auth"} exact element={<Login />} />
        <Route path={mainPath+"/analytics"} exact element={<ChartPage/>} />
        <Route path={mainPath+"/expenses"} exact element={<ExpensesPage/>} />
        <Route path={mainPath+"/bills/:id"} element={<BillPage/>} />
      </Routes>
  );
};
