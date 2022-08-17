import React from "react";
import { Balance } from "../partials/Balance";
import { ProgressBar } from "../partials/Loader";

const balance = {
    name:"Balance",
    money:8200.85,
    limit:17000,
    isVisa:true,
}

export const ExpensesPage = () => {
  return (
    <div className="px-12 w-full">
        <Balance balance={balance}/>
    </div>
  );
};
