import React from "react";
import { BackArrow, ThreeDots } from "../partials/Decorative";
import { useNavigate } from "react-router-dom";
import { SectionTitle } from "./Titles";
import { ProgressBar } from "./Loader";

export const Balance = (props) => {
  const { balance, className } = props;
  const clickClass = balance.expenses ? "cursor-pointer" : "";
  const balanceClass =
    className +
    " relative h-30 rounded-lg px-8 py-4 my-4 bg-dark-cornflower " +
    clickClass;

  const navigate = useNavigate();

  return (
    <div
      className={balanceClass}
      onClick={() => {
        balance.expenses && navigate("/bills/" + balance.slug);
      }}
    >
      <h2 className="text-lg font-semibold">{balance.name}</h2>
      {balance.description && (
        <p className="text-[#ccc]">{balance.description}</p>
      )}
      <div className="w-full flex justify-between">
        <MoneyBalance money={balance.money} />
        {balance.moneyTwo && <MoneyBalance money={balance.moneyTwo} />}
      </div>
      {balance.isVisa && (
        <span className="text-2xl text-cyan absolute top-4 right-16">VISA</span>
      )}
      {balance.limit && (
        <ProgressBar
          className="mt-6 mb-4"
          max={balance.limit}
          val={balance.money}
        />
      )}
      <button className="absolute top-4 right-4">
        <ThreeDots />
      </button>
    </div>
  );
};

export const OpenedBalance = (props) => {
  const { balance, className } = props;
  const balanceClass =
    className +
    "w-screen h-44 px-8 py-4 my-4 bg-dark-cornflower relative flex justify-between pt-14";

  const navigate = useNavigate();

  return (
    <div className={balanceClass}>
      <div>
        <SectionTitle content="Adipiscing elit" />
        <MoneyBalance money={balance.money} />
      </div>
      <div className="pt-12">
        <h3 className="text-md font-semibold">{balance.name}</h3>
        {balance.description && (
          <p className="text-[#ccc] text-sm">{balance.description}</p>
        )}
      </div>
      <button
        className="absolute top-2 left-8"
        onClick={() => {
          navigate("/");
        }}
      >
        <BackArrow />
      </button>
      <button className="absolute top-4 right-8">
        <ThreeDots />
      </button>
    </div>
  );
};

const MoneyBalance = (props) => {
  const { money } = props;
  return <span className="text-3xl mt-6">{numberToMoney(money)}</span>;
};

const numberToMoney = (money) => {
  const txt = money.toString();
  let answer = "$ ";
  let int = "";
  let isFloat = false;
  let coins = ""
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] === ".") isFloat = true;
    if (!isFloat) int += txt[i];
    else coins += txt[i]
  }
  const offset = int.length % 3;
  for (let i = 0; i < int.length; i++) {
    if (i % 3 === offset && i !== 0 && i !== int.length - 1) answer += ",";
    answer += int[i];
  }
  return answer + coins;
};
export { MoneyBalance };
