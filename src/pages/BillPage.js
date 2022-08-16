import React from "react";
import { bills, getBillBySlug } from "../data/bills";
import { useParams } from "react-router-dom";
import { OpenedBalance } from "../partials/Balance";

export const BillPage = () => {
  const { id } = useParams();
  const bill = getBillBySlug(id);
  const expenses = bill.expenses;
  return (
    <div className="realtive w-full">
      <OpenedBalance balance={bill}/>
      <div className="divide-y-2 divide-dark-cornflower">
        {expenses.map((expense, i) => (
          <BillExpense key={i} expense={expense} />
        ))}
      </div>
    </div>
  );
};

const BillExpense = (props) => {
  const { expense } = props;
  const isIncome = expense.money > 0;
  return (
    <div className="flex justify-between items-center py-4 mx-12">
      <div className="">
        <h3 className="text-lg">{expense.name}</h3>{" "}
        <p className="text-[#bbb]">{expense.description}</p>
      </div>
      <span className={isIncome ? "text-cyan text-xl" : "text-white text-xl"}>
        {isIncome ? "+ $" : "- $"}
        {Math.abs(expense.money)}
      </span>
    </div>
  );
};
