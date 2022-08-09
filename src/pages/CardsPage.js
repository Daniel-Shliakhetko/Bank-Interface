import React from "react";
import { Cards } from "../partials/Cards";

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
];

export const CardsPage = () => {
  return (
    <>
      <Cards cards={cards} />
    </>
  );
};
