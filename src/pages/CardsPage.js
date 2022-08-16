import React from "react";
import { Cards } from "../partials/Cards";
import { SectionTitle } from "../partials/Titles";
import { Balance } from "../partials/Balance";
import { Button } from "../partials/Button";

const cards = [
  {
    bank: "bank name",
    name: "Name",
    surname: "Surname",
    cardNumber: "1234567890000000",
    background: "cyan",
  },
  {
    bank: "bank name",
    name: "Name",
    surname: "Surname",
    cardNumber: "1234567890000000",
    background: "dark-cornflower",
  },
  {
    bank: "bank name",
    name: "Name",
    surname: "Surname",
    cardNumber: "1234567890000000",
    background: "cyan",
  },
  {
    bank: "bank name",
    name: "Name",
    surname: "Surname",
    cardNumber: "1234567890000000",
    background: "dark-cornflower",
  },
];

const balance = {
  name: "Cards",
  description: "Aliquam erat volutpat maec",
  money: 3500,
  moneyTwo: 1200,
  isVisa: false,
};

export const CardsPage = () => {
  return (
    <div className="px-12 w-full">
      <SectionTitle content="Adipiscing elit" />
      <Cards cards={cards} />
      <Balance balance={balance} />
      <div className="flex justify-center items-center">
        <Button content="Add card" />
      </div>
    </div>
  );
};
