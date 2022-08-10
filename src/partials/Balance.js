import React from "react";
import { ThreeDots } from "../partials/Decorative";

export const Balance = (props) => {
  const { balance } = props;

  return (
    <div className="relative h-30 rounded-lg px-8 py-4 my-8 bg-dark-cornflower">
      <h2 className="text-lg font-semibold">{balance.name}</h2>
      {balance.description && <p className="text-[#ccc] mb-4">{balance.description}</p>}
      <div className="w-full flex justify-between">
        <span className="text-3xl">$ {balance.money}</span>
        {balance.moneyTwo && (
          <span className="text-3xl">$ {balance.moneyTwo}</span>
        )}
      </div>
      {balance.isVisa && (
        <span className="text-2xl text-cyan absolute top-4 right-16">VISA</span>
      )}
      <button className="absolute top-4 right-4">
        <ThreeDots />
      </button>
    </div>
  );
};
