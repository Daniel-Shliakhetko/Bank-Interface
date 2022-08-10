import "../App.scss";
import React from "react";

export const AppTitle = () => {
  return (
      <h1 className="uppercase text-6xl text-cyan text-center my-12">m-bank</h1>
  );
};

export const SectionTitle = (props) => {
  return (
      <h2 className="uppercase text-lg text-cyan my-12">{props.content}</h2>
  );
};
