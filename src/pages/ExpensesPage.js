import React from "react";
import { Balance, MoneyBalance } from "../partials/Balance";
import { Button } from "../partials/Button";
import { ThreeDots } from "../partials/Decorative";
import { Icon } from "../partials/Icon";
import { ProgressBar } from "../partials/Loader";
import { SectionTitle } from "../partials/Titles";

const balance = {
  name: "Balance",
  money: 8200.85,
  limit: 17000,
  isVisa: true,
};
const expenses = [
  {
    isIncome: true,
    money: 4500,
    limit: 10000,
  },
  {
    isIncome: false,
    money: 8500,
    limit: 10000,
  },
];

export const ExpensesPage = () => {
  return (
    <div className="px-12 w-full">
      <Balance balance={balance} />
      {expenses.map((expense, i) => (
        <ExpenseBlock key={i} expense={expense} />
      ))}
      <div>
        <SectionTitle content="Adipiscing elit" />
        <div className="flex justify-between">
          <MoneyBalance money={3500} />
          <Button content="back" color="dark-cornflower" textColor="cyan" />
        </div>
      </div>
    </div>
  );
};

const ExpenseBlock = (props) => {
  const { expense } = props;
  const color = expense.isIncome ? "cyan" : "purple-pizzazz";
  const iconBoxClass =
    "h-16 w-16 rounded-lg flex justify-center items-center bg-" + color;

  return (
    <div className="relative h-30 rounded-lg px-8 py-8 my-4 space-x-4 flex bg-dark-cornflower">
      <div className={iconBoxClass}>
        <Icon
          icon={expense.isIncome ? "up" : "down"}
          size="2.5rem"
          color="white"
        />
      </div>
      <div className="w-full space-y-4  pr-4">
        <h3>Income</h3>
        <ProgressBar max={expense.limit} val={expense.money} color={color} />
      </div>
      <button className="absolute top-4 right-4">
        <ThreeDots />
      </button>
    </div>
  );
};
