import React from "react";
import { useState, useEffect } from "react";
import { Balance } from "../partials/Balance";
import { Button } from "../partials/Button";
import { IconButton } from "../partials/Decorative";
import { Loader } from "../partials/Loader";
import { SectionTitle } from "../partials/Titles";

const bills = [
  {
    name: "Bill 01",
    description: "Aliquam erat volutpat maec",
    money: 3500,
  },
  {
    name: "Bill 02",
    money: 650,
  },
  {
    name: "Bill 03",
    money: 480,
  },
];
const buttons = [
  { icon: { name: "stack", size: "3em", color: "white" }, label: "Volutpat" },
  { icon: { name: "screen", size: "3em", color: "white" }, label: "Volutpat" },
  { icon: { name: "money", size: "3em", color: "white" }, label: "Volutpat" },
];

export const FrontPage = (props) => {
  const loadingDuration = 2000;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, loadingDuration);
  }, []);

  return (
    <>
      {loading && props.isLoading && <Loader />}
      <SectionTitle content="Adipiscing elit" />
      <Balance balance={bills[0]} />
      <div className="flex justify-between space-x-8 mb-12">
        <Button className="w-1/2" content="Pay now" />
        <Button className="w-1/2" content="Back" unactive={true} />
      </div>
      <SectionTitle content="Adipiscing elit" />
      <div className="flex justify-between space-x-8">
        <Balance className="w-1/2" balance={bills[1]} />
        <Balance className="w-1/2" balance={bills[2]} />
      </div>
      <div className="lg:px-16 py-8 flex justify-between space-x-4">
        {buttons.map((button, i) => (
          <IconButton key={i} button={button} />
        ))}
      </div>
    </>
  );
};
